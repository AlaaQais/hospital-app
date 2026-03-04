
export type UserRole = 'ADMIN' | 'STAFF' | 'ENGINEER' | 'SUPIT' | 'DIRECTORE_IT' | 'MEDICAL_DIRECTOR' | 'MEDICAL_SECRETARY' | 'HR_MANAGER';

export const UserRole = {
    ADMIN: 'ADMIN',
    STAFF: 'STAFF',
    ENGINEER: 'ENGINEER',
    SUPIT: 'SUPIT',
    DIRECTORE_IT: 'DIRECTORE_IT',
    MEDICAL_DIRECTOR: 'MEDICAL_DIRECTOR',
    MEDICAL_SECRETARY: 'MEDICAL_SECRETARY',
    HR_MANAGER: 'HR_MANAGER'
} as const;

export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole | string; // Allowing string for dynamic roles
    department: string;
    empCode: string;
    password?: string;
    extension?: string;
    status: 'active' | 'inactive' | 'locked';
    lastLogin?: string | null;
    avatar?: string | null;
    preferences?: any;
    permissions?: Record<string, boolean>;
    createdAt: string;
}

export type TicketStatus = 'OPEN' | 'IN_PROGRESS' | 'PENDING_APPROVAL' | 'APPROVED' | 'CLOSED' | 'REJECTED';

export const TicketStatus = {
    OPEN: 'OPEN',
    IN_PROGRESS: 'IN_PROGRESS',
    PENDING_APPROVAL: 'PENDING_APPROVAL',
    APPROVED: 'APPROVED',
    CLOSED: 'CLOSED',
    REJECTED: 'REJECTED'
} as const;

export interface Attachment {
    name: string;
    size: number;
    type: string;
    content: string; // Base64 or URL
}

export interface Ticket {
    id: string;
    title: string;
    details: string;
    status: TicketStatus;
    type: string;
    priority: 'low' | 'medium' | 'high';
    requester: User;
    assignedTo?: User;
    location?: string;
    inventoryItemId?: string;
    attachments: Attachment[];
    history: { status: TicketStatus; changedBy: User; timestamp: Date; comment?: string }[];
    createdAt: Date;
    department: string;
}

export type InventoryCategory = 'computers' | 'printers' | 'peripherals' | 'networking' | 'accessories' | 'spare-parts';
export type InventoryItemStatus = 'available' | 'assigned' | 'maintenance' | 'retired' | 'pending-approval' | 'approved-for-checkout';

export interface InventoryItem {
    id: string;
    name: string;
    model: string;
    serialNumber: string;
    category: InventoryCategory;
    status: InventoryItemStatus;
    location: string;
    assignedTo?: string; // Name of person
    assignedDepartment?: string;
    assignmentDate?: string;
    expectedReturn?: string;
    purchaseDate: string;
    cost: number;
    specifications: Record<string, string>;
    icon: string;
    lastUpdated: string;
    warrantyExpiry?: string;
}

export interface ChatMessage {
    id: string | number;
    sender: { id: string | number; name: string; avatar?: string | null };
    receiver: { id: string | number; name: string };
    text: string;
    timestamp: Date | string;
    attachment?: Attachment;
    read: boolean;
}

export interface Notification {
    id: string | number;
    userId: string;
    message: string;
    read: boolean;
    timestamp: Date;
    link?: string;
    type?: 'system' | 'alert' | 'info' | 'success' | 'warning';
    title?: string;
    isRead?: boolean;
}

export interface QuickLink {
    id: string;
    label: string;
    url: string;
    visibility: 'public' | 'private';
    allowedUserIds?: string[];
}

export interface Engineer extends User {
    tasks: Ticket[];
    performance: number;
    specialization: string;
    avatar?: string;
}

export interface PendingRequest {
    id: string;
    type: string;
    title: string;
    requester: string;
    date: string;
    status: 'pending';
}

export interface TeamAnalytics {
    resolutionTime: number;
    firstResponseTime: number;
    satisfactionRate: number;
    closedTickets: number;
}

export interface SupervisorNotification extends Notification {
    // Extends basic notification
}

export interface SupervisorChatMessage extends ChatMessage {
    files?: any[];
}

export interface StaffRequest {
    id: string;
    employeeName: string;
    employeeId: string;
    department: string;
    extension?: string;
    type: string;
    typeIcon: string;
    priority: 'low' | 'medium' | 'high';
    status: 'pending' | 'in-progress' | 'completed';
    description: string;
    location?: string;
    submissionDate: string;
    assignedEngineer?: string;
    completionDate?: string;
    attachments: Attachment[];
    rejectionReason?: string;
}

export interface StaffNotification extends Notification {
    actionLabel?: string;
}

export interface StaffChatMessage extends ChatMessage {
    files?: any[];
}

export interface Activity {
    id: string | number;
    type: "user_created" | "request_approved" | "equipment_assigned" | "system_alert" | "equipment_added" | "display_update";
    title: string;
    description: string;
    user: string;
    timestamp: Date;
}

export interface IPTVChecklistItem {
    id: string;
    locationName: string;
    serialNumber: string;
    portLabel?: string;
    ip?: string;
    status: 'OK' | 'Needs Repair' | 'Not Checked';
    lastCheckedBy?: string;
    lastCheckedAt?: string;
}

export type IPTVShiftStatus = 'Pending' | 'In Progress' | 'Completed';

export interface IPTVShift {
    id: string;
    date: string; // YYYY-MM-DD
    shiftType: 'Morning' | 'Evening';
    assignedEngineerId: string;
    status: IPTVShiftStatus;
    notes?: string;
    completedAt?: string;
}

export interface EngineerShift {
    date: string;
    morning: string[]; // User IDs
    evening: string[]; // User IDs
}

export interface CompletedIPTVReport {
    id: string;
    date: string;
    shiftType: 'Morning' | 'Evening';
    engineerName: string;
    completedAt: string;
    notes?: string;
    checklistSnapshot: IPTVChecklistItem[];
}

export interface AdmissionScreen {
    id: string;
    roomNumber: string;
    floor: string;
    serialNumber: string;
    model: string;
    station: '1' | '2';
    screenSize?: string;
    screenCount?: number;
    status: 'In Room' | 'In Maintenance';
    currentHolderId?: string;
    lastActivityDate?: string;
}

export interface AdmissionScreenLog {
    id: string;
    screenId: string;
    roomNumber: string;
    floor: string;
    engineerId?: string;
    engineerName?: string;
    date: string;
    action: 'System Check' | 'Replacement' | 'Returned to Room' | 'New Installation';
    notes?: string;
    oldSerialNumber?: string;
    newSerialNumber?: string;
}

export type AppView = 'dashboard' | 'tickets' | 'inventory' | 'users' | 'departments' | 'quickLinks' | 'settings' | 'appearance' | 'approvals' | 'allActivities' | 'permissions' | 'nurseCall' | 'scheduleMaintenance' | 'clinics' | 'monitor' | 'marketing' | 'departmentEmployees' | 'iptv' | 'iptvReports' | 'iptvReportArchives' | 'admissionScreens' | 'ai' | 'aiVideoGenerator' | 'inpatient' | 'operationRoom' | 'clinicWaiting';

export interface Employee {
    id: number | string;
    name: string;
    email: string;
    department: string;
    extension: string;
    role?: string;
    avatar?: string;
}

export enum NurseCallRequestStatus {
    PENDING = 'pending',
    APPROVED = 'approved',
    REJECTED = 'rejected',
}

export interface NurseCallRequestEmployee {
    name: string;
    empCode: string;
    department: string;
    delivered: boolean;
    deliveredAt?: string;
    signature?: string;
    pdf?: string; // receipt PDF data url
}

export interface NurseCallCardRequest {
    id: string;
    requesterId: string;
    requesterName: string;
    status: NurseCallRequestStatus;
    employees: NurseCallRequestEmployee[];
    createdAt: string;
    requestPdf?: string; // Request form PDF data url
    rejectionReason?: string;
}

export interface EmployeeOfMonth {
    year: number;
    month: number;
    image: string; // Base64 or URL
}

export interface SharedFile {
    id: string;
    name: string;
    size: number;
    type: string;
    uploadedBy: string;
    uploadedAt: string;
    data: string; // Base64 or URL
}

export type AdmissionScreenAction = 'System Check' | 'Replacement' | 'Returned to Room' | 'New Installation';

export interface Clinic {
    id: number;
    name: string;
    code: string;
}

export type NurseCallPartType = 'Call Unit' | 'Handset' | 'RCU' | 'Lamp' | 'Pull-Cord';
export type RoomType = 'Ward' | 'ICU' | 'Insulation';

export interface NurseCallRoom {
    id: string;
    roomName: string;
    roomNumber: string;
    floor: string;
    type: RoomType;
}

export interface NurseCallMaintenanceLog {
    id: string;
    roomId: string;
    roomName: string;
    roomNumber: string;
    partChanged: NurseCallPartType;
    engineerName: string;
    timestamp: string;
    comment?: string;
}

export interface ClinicDoctor {
    id: string;
    nameEn: string;
    nameAr: string;
    titleEn: string;
    titleAr: string;
    department: string;
}

export interface ClinicRoom {
    id: string;
    number: string;
    department: string;
}

export interface ClinicDisplayData {
    clinicNumber?: string;
    doctorNameEn?: string;
    doctorNameAr?: string;
    doctorTitleEn?: string;
    doctorTitleAr?: string;
    consultationNumber?: string;
    isDoctorIn?: boolean;
    themeColor?: string;
    mediaUrl?: string;
    mediaType?: 'image' | 'video' | 'text' | 'document' | 'spreadsheet' | 'presentation';
    // Adding 'type' as an alias or additional property for media type
    type?: 'image' | 'video' | 'text' | 'document' | 'spreadsheet' | 'presentation';
    isSplitView?: boolean;
    tickerText?: string;
    isTickerActive?: boolean;
    tickerDirection?: 'ltr' | 'rtl';
    tickerSpeed?: number;
    fileName?: string;
}

export interface PatientMealEntry {
    id: string;
    date: string;
    fileNumber: string;
    patientName: string;
    roomNumber: string;
    receiver: string;
    allergies: string;
    mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';
    dietType: string;
    createdAt: string;
    isArchived: boolean;
}

export interface TaskComment {
    id: string;
    text: string;
    author: string;
    createdAt: string;
}

export interface MedicalTask {
    id: number;
    title: string;
    description: string;
    assignee: string;
    assigneeId: string;
    creatorId: string;
    dueDate: string;
    status: 'pending' | 'in-progress' | 'completed' | 'review';
    comments: TaskComment[];
    createdAt: string;
}

export interface OncologyRecord {
    id: string;
    name: string;
    mrn: string;
    drug: string;
    administration: string;
    bud: string;
    prePh: string;
    checkedPh: string;
    createdAt: string;
}

// --- INPATIENT TYPES ---

export type InpatientRoomType = 'single' | 'double' | 'nicu';

export interface InpatientPatientData {
    bedLabel: string; // "A", "B", "SD-080-1", or empty for single
    doctorNameEn: string;
    doctorNameAr: string;
    specialtyEn: string;
    specialtyAr: string;
    admissionNumber: string;
    visitingAllowed: boolean;
}

export interface InpatientRoomData {
    unitId: string;
    roomId: string;
    roomType: InpatientRoomType;
    patients: InpatientPatientData[];
    // Marketing Overrides
    mediaUrl?: string;
    mediaType?: 'image' | 'video' | 'text';
    isSplitView?: boolean;
    tickerText?: string;
    isTickerActive?: boolean;
    tickerDirection?: 'ltr' | 'rtl';
    tickerSpeed?: number;
    themeColor?: string;
}

export interface InpatientStructure {
    id: string;
    nameEn: string;
    nameAr: string;
    classes: {
        name: string;
        type: InpatientRoomType;
        rooms: string[];
    }[];
}

// --- OPERATION ROOM TYPES ---

export interface OperationRoomData {
    roomId: string;
    admissionNo: string;
    patientName: string;
    opCode: string;
    startTime: string;
    endTime: string;
    duration: string;
    doctorName: string;
    profession: string;
    
    // Marketing Overrides
    mediaUrl?: string;
    mediaType?: 'image' | 'video' | 'text';
    fileName?: string; // For media tracking
    isSplitView?: boolean;
    tickerText?: string;
    isTickerActive?: boolean;
    tickerDirection?: 'ltr' | 'rtl';
    tickerSpeed?: number;
    
    // Global Styling
    themeColor?: string;
}

export interface DisplayData extends ClinicDisplayData {
    // For Generic Display (PublicDisplayScreen)
    title?: string;
    message?: string;
    status?: 'normal' | 'urgent' | 'success' | 'warning';
    loopCount?: number;
    isPlaying?: boolean;
}

// --- CLINIC WAITING TYPES ---
export interface WaitingPatient {
    ticketNo: string;
    name: string;
    time: string;
}

export interface WaitingDoctor {
    id: string; // Unique for list key
    name: string; // Arabic Name
    specialty: string; // Arabic Specialty
    status: 'In' | 'Out'; // "الطبيب متواجد بالعيادة" | "غير متوفر"
    currentTicket: string; // "رقم الكشف"
    patients: WaitingPatient[];
}

export interface ClinicWaitingData {
    clinicId: string;
    doctors: WaitingDoctor[];
    // Marketing
    mediaUrl?: string;
    mediaType?: 'image' | 'video' | 'text';
    isSplitView?: boolean; // Controls Carousel vs Side-by-Side
    isVideoHidden?: boolean; // Controls if video plays in background (Audio Only)
    tickerText?: string;
    isTickerActive?: boolean;
    tickerDirection?: 'ltr' | 'rtl';
    tickerSpeed?: number;
    // Call Trigger (Short-lived signal)
    triggerCall?: {
        ticketNo: string;
        roomNo: string;
        patientName: string;
        timestamp: number;
    };
    // New Custom Layout Fields
    customBackgroundUrl?: string;
    isActiveCustomLayout?: boolean;
    layoutPosition?: 'left' | 'right';
}
