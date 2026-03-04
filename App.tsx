
import React from 'react';
import { AppProvider, useAppContext } from './context/AppContext';
import LoginScreen from './components/LoginScreen';
import DashboardLayout from './components/DashboardLayout';
import PublicDisplayScreen from './screens/public/PublicDisplayScreen';
import AppIcon from './components/AppIcon';
import PublicClinicDisplay from './screens/public/PublicClinicDisplay';
import PublicInpatientDisplay from './screens/public/PublicInpatientDisplay';
import PublicOperationRoomDisplay from './screens/public/PublicOperationRoomDisplay';
import PublicClinicWaitingDisplay from './screens/public/PublicClinicWaitingDisplay';

const AppContent: React.FC = () => {
    const { currentUser, isMobileMode } = useAppContext();

    // Check for display mode URL parameter or specific path
    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('mode');
    const path = window.location.pathname;

    // Normalize path to handle URL encoding (spaces become %20)
    const decodedPath = decodeURIComponent(path);

    // 1. Primary Medical Display
    if (mode === 'display' || decodedPath === '/medical-display' || decodedPath === '/Medical Administration/Screen Display') {
        return <PublicDisplayScreen storageKey="screenDisplayData" titleOverride="Medical Administration" />;
    }
    
    // 2. Clinic Displays (Generic Pattern: /clinic-display/:department/:screenId)
    // Example: /clinic-display/ENT/1
    if (decodedPath.startsWith('/clinic-display/')) {
        const parts = decodedPath.split('/');
        // parts[0] = "", parts[1] = "clinic-display", parts[2] = Department, parts[3] = ScreenID
        if (parts.length >= 4) {
            const department = parts[2];
            const screenId = parts[3];
            return <PublicClinicDisplay department={department} screenId={screenId} />;
        }
    }

    // 3. Inpatient Displays (Generic Pattern: /inpatient-display/:unitId/:roomId)
    // Example: /inpatient-display/5TH_PEDIA/5015
    if (decodedPath.startsWith('/inpatient-display/')) {
        const parts = decodedPath.split('/');
        // parts[0] = "", parts[1] = "inpatient-display", parts[2] = UnitID, parts[3] = RoomID
        if (parts.length >= 4) {
            const unitId = parts[2];
            const roomId = parts[3];
            return <PublicInpatientDisplay unitId={unitId} roomId={roomId} />;
        }
    }
    
    // 4. Operation Room Displays (Generic Pattern: /or-display/:roomId)
    // Example: /or-display/IP_601
    if (decodedPath.startsWith('/or-display/')) {
        const parts = decodedPath.split('/');
        // parts[0] = "", parts[1] = "or-display", parts[2] = RoomID
        if (parts.length >= 3) {
            const roomId = parts[2];
            return <PublicOperationRoomDisplay roomId={roomId} />;
        }
    }

    // 5. Clinic Waiting Displays (Generic Pattern: /Waiting/:clinicIds)
    // Example: /Waiting/34 or /Waiting/34&6
    if (decodedPath.startsWith('/Waiting/')) {
        const parts = decodedPath.split('/');
        if (parts.length >= 3) {
            const clinicIds = parts[2];
            return <PublicClinicWaitingDisplay clinicIds={clinicIds} />;
        }
    }

    let content;
    if (!currentUser) {
        content = <LoginScreen />;
    } else {
        content = <DashboardLayout />;
    }

    if (isMobileMode) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-900 p-4">
                <div className="w-[375px] h-[812px] bg-background rounded-[40px] overflow-hidden shadow-2xl border-8 border-gray-800 relative flex flex-col">
                    {/* Fake Status Bar */}
                    <div className="h-8 bg-black/90 flex justify-between items-center px-6 text-white text-xs select-none z-50">
                        <span>9:41</span>
                        <div className="flex gap-1.5 items-center">
                            <AppIcon name="Signal" size={12} />
                            <AppIcon name="Wifi" size={12} />
                            <AppIcon name="Battery" size={12} />
                        </div>
                    </div>
                    {/* Notch simulation */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-gray-800 rounded-b-2xl z-50"></div>
                    
                    <div className="flex-1 overflow-hidden relative">
                        {content}
                    </div>

                    {/* Home Indicator */}
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-400 rounded-full z-50"></div>
                </div>
            </div>
        );
    }

    return content;
};

const App: React.FC = () => {
    return (
        <AppProvider>
            <AppContent />
        </AppProvider>
    );
};

export default App;
