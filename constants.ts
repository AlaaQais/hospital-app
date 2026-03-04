
import { User, UserRole, Ticket, TicketStatus, InventoryItem, ChatMessage, Notification, QuickLink, Engineer, PendingRequest, TeamAnalytics, SupervisorNotification, SupervisorChatMessage, StaffRequest, StaffNotification, StaffChatMessage, Activity, IPTVChecklistItem, IPTVShift, EngineerShift, CompletedIPTVReport, AdmissionScreen, AdmissionScreenLog, AppView, Employee, NurseCallCardRequest, NurseCallRequestStatus, EmployeeOfMonth, InpatientStructure } from './types';

// Clinic Departments List
export const CLINIC_DEPARTMENTS = [
    'Emergency', 'Surgery', 'Operation Room', 'Pediatric Surgery', 'Obs & Gynac', 
    'Orthopedic', 'Dental', 'ENT', 'Ophthalmology', 'Pediatrics', 
    'Internal Medicine', 'Urology', 'NeuroSurgery', 'Cardiology', 'Diabetes', 
    'CHEST', 'Neurology', 'Hematology', 'Psychiatry', 'Vascular Surgery', 
    'Employees Clinic', 'General practioiner', 'Rheumatism', 'Nephrolugy', 
    'infectious internal medicine', 'Gastroenterology & Endoscopy', 
    'PSYCHO THERAPY', 'Immunity and allergy', 'IVF UNIT', 'Spine surgery', 
    'Orthodontic', 'VIP Clinics', 'Oncology', 'Physical Therapy', 'Dermatology',
    'SC1', 'SC2', 'SC3', 'SC4', 'SC5', 'SC6', 'SC7',
    'Rehab. Medicine', 'Maternal Fetal Medicine', 'Pediatric Endocrinology',
    'Pediatric nephrology', 'Pediatric Neurology', 'Waiting 1', 'Waiting 2',
    'Waiting 3', 'Waiting 4',
    'WAITING 5', 'WAITING 6', 'WAITING 7', 'WAITING 8', 'WAITING 9', 'WAITING 10'
];

// Waiting Clinics List (Code -> Name)
export const WAITING_CLINICS = [
    { code: '1', name: 'ER', nameAr: 'الطوارئ' },
    { code: '2', name: 'Surgery', nameAr: 'عيادات الجراحة' },
    { code: '4', name: 'Obs & Gynae', nameAr: 'النساء والولادة' },
    { code: '5', name: 'Orthopedic', nameAr: 'عيادات العظام' },
    { code: '6', name: 'Dental', nameAr: 'عيادات الأسنان' },
    { code: '7', name: 'E N T', nameAr: 'الأنف والأذن والحنجرة' },
    { code: '8', name: 'Ophthalmology', nameAr: 'عيادات العيون' },
    { code: '10', name: 'Pediatrics', nameAr: 'عيادات الأطفال' },
    { code: '11', name: 'Internal Medicine', nameAr: 'الباطنية' },
    { code: '12', name: 'Urology', nameAr: 'المسالك البولية' },
    { code: '14', name: 'NeuroSurgery', nameAr: 'جراحة المخ والأعصاب' },
    { code: '15', name: 'Cardiology', nameAr: 'عيادات القلب' },
    { code: '17', name: 'CHEST', nameAr: 'الأمراض الصدرية' },
    { code: '19', name: 'Neurology', nameAr: 'عيادات المخ والأعصاب' },
    { code: '20', name: 'Haematology', nameAr: 'أمراض الدم' },
    { code: '21', name: 'Psychiatry', nameAr: 'الطب النفسي' },
    { code: '24', name: 'Vascular Surgery', nameAr: 'جراحة الأوعية الدموية' },
    { code: '25', name: 'Employees Clinic', nameAr: 'عيادة الموظفين' },
    { code: '26', name: 'General practioiner', nameAr: 'الطب العام' },
    { code: '31', name: 'Rheumatism', nameAr: 'الروماتيزم' },
    { code: '34', name: 'Gastroenterology & Endoscopy', nameAr: 'الجهاز الهضمي والمناظير' },
    { code: '45', name: 'PSYCHO THERAPY', nameAr: 'العلاج النفسي' },
    { code: '47', name: 'Immunity and allergy', nameAr: 'المناعة والحساسية' },
    { code: '51', name: 'IVF UNIT', nameAr: 'وحدة الإخصاب' },
    { code: '59', name: 'Spine surgery', nameAr: 'جراحة العمود الفقري' },
    { code: '60', name: 'Diabetic Foot', nameAr: 'القدم السكري' },
    { code: '61', name: 'Orthodontic', nameAr: 'تقويم الأسنان' },
    { code: '62', name: 'Rehab. Medicine', nameAr: 'الطب الطبيعي وإعادة التأهيل' },
    { code: '63', name: 'Maternal Fetal Medicine', nameAr: 'طب الأمومة والجنين' },
    { code: '64', name: 'Pediatric Endocrinology', nameAr: 'الغدد الصماء للأطفال' },
    { code: '65', name: 'Pediatric nephrology', nameAr: 'كلى الأطفال' },
    { code: '66', name: 'Pediatric Neurology', nameAr: 'مخ وأعصاب أطفال' },
    { code: '67', name: 'Dermatology', nameAr: 'الجلدية' },
    { code: '68', name: 'Waiting 1', nameAr: 'انتظار 1' },
    { code: '69', name: 'Waiting 2', nameAr: 'انتظار 2' },
    { code: '70', name: 'Waiting 3', nameAr: 'انتظار 3' },
    { code: '71', name: 'Waiting 4', nameAr: 'انتظار 4' },
    { code: '72', name: 'Oncology', nameAr: 'الأورام' },
    { code: '73', name: 'WAITING 5', nameAr: 'انتظار 5' },
    { code: '74', name: 'WAITING 6', nameAr: 'انتظار 6' },
    { code: '75', name: 'WAITING 7', nameAr: 'انتظار 7' },
    { code: '76', name: 'WAITING 8', nameAr: 'انتظار 8' },
    { code: '77', name: 'WAITING 9', nameAr: 'انتظار 9' },
    { code: '78', name: 'WAITING 10', nameAr: 'انتظار 10' }
];

// Operation Room Structure
export const OPERATION_ROOM_STRUCTURE = [
    {
        id: 'ortho',
        name: 'Orthopedic Clinics',
        rooms: [
            { id: 'IP_601', name: 'IP_601' },
            { id: 'IP_602', name: 'IP_602' }
        ]
    },
    {
        id: 'obgyn',
        name: 'Obstetrics and Gynecology Clinic',
        rooms: [
            { id: 'IP_701', name: 'IP_701' },
            { id: 'IP_702', name: 'IP_702' }
        ]
    },
    {
        id: 'or',
        name: 'Operation Rooms',
        rooms: [
            { id: 'OR_1', name: 'OR Room 1' },
            { id: 'OR_2', name: 'OR Room 2' },
            { id: 'OR_3', name: 'OR Room 3' },
            { id: 'OR_4', name: 'OR Room 4' },
            { id: 'OR_5', name: 'OR Room 5' },
            { id: 'OR_6', name: 'OR Room 6' }
        ]
    }
];

// Inpatient Units Structure
export const INPATIENT_UNITS: InpatientStructure[] = [
    {
        id: '5TH_PEDIA',
        nameEn: 'FIFTH FLOOR (PEDIA WARD)',
        nameAr: 'الدور الخامس (جناح الأطفال)',
        classes: [
            { name: 'Suite', type: 'single', rooms: ['5015', '5016'] },
            { name: 'First Class', type: 'single', rooms: ['5001', '5002', '5003', '5004', '5005', '5006', '5007', '5008', '5009', '5010', '5011', '5012', '5015', '5016', '5017', '5018', '5019', '5020', '5021'] },
            { name: 'Burn Isolation Room', type: 'single', rooms: ['5013', '5014'] }
        ]
    },
    {
        id: 'CCU',
        nameEn: 'CCU',
        nameAr: 'وحدة العناية القلبية',
        classes: [
            { name: 'ICU', type: 'single', rooms: ['2', '3', '4', '5', '6', '7', '8', '9'] },
            { name: 'Burn Isolation Room', type: 'single', rooms: ['1'] }
        ]
    },
    {
        id: '6TH_MALE_1',
        nameEn: 'SIXTH FLOOR (MALE ADMISSION WARD 1)',
        nameAr: 'الدور السادس (جناح تنويم رجال1)',
        classes: [
            { name: 'Suite', type: 'single', rooms: ['6015', '6016'] },
            { name: 'First Class', type: 'single', rooms: ['6001', '6002', '6003', '6004', '6005', '6006', '6007', '6008', '6009', '6010', '6011', '6012', '6017', '6018', '6019', '6020', '6021', '6022'] },
            { name: 'Burn Isolation Room', type: 'single', rooms: ['6014', '6015'] }
        ]
    },
    {
        id: 'ICU',
        nameEn: 'ICU',
        nameAr: 'وحدة العناية المركزة',
        classes: [
            { name: 'ICU', type: 'single', rooms: ['1', '2', '3', '4', '5', '6', '7', '8', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '23', '24', '25', '26', '27', '28', '29'] },
            { name: 'Burn Isolation Room', type: 'single', rooms: ['9', '22', '30'] }
        ]
    },
    {
        id: 'DAY_SURGERY',
        nameEn: 'DAY SURGERY UNIT',
        nameAr: 'وحدة جراحة اليوم الواحد',
        classes: [
            { name: 'Suite', type: 'single', rooms: ['8015', '8016'] },
            { name: 'First Class', type: 'single', rooms: ['8001', '8002', '8017', '8018', '8019', '8020', '8021', '8022'] },
            { name: 'Second Class', type: 'double', rooms: ['8003', '8004', '8005', '8006', '8007', '8008', '8009', '8010', '8011', '8012'] },
            { name: 'Burn Isolation Room', type: 'single', rooms: ['8013', '8014'] }
        ]
    },
    {
        id: 'NICU',
        nameEn: 'NICU',
        nameAr: 'وحدة العناية المركزة للأطفال حديثي الولادة',
        classes: [
            { name: 'First Class', type: 'single', rooms: ['2205-43', '2207-44', '2208-45', '2210-47', '2211-48', '2212-49'] },
            { name: 'NICU Intensive Care', type: 'nicu', rooms: ['SD-080', 'SD-081', 'SD-082', 'SD-083', 'SD-092'] },
            { name: 'Burn Isolation Room', type: 'single', rooms: ['2206-42', '2209-46', '2213-50'] }
        ]
    },
    {
        id: 'PICU',
        nameEn: 'PICU',
        nameAr: 'وحدة العناية المركزة للأطفال',
        classes: [
            { name: 'ICU', type: 'single', rooms: Array.from({length: 27}, (_, i) => (i + 1).toString()) },
            { name: 'Burn Isolation Room', type: 'single', rooms: ['28', '29'] }
        ]
    },
    {
        id: 'BURN_UNIT',
        nameEn: 'BURN UNIT',
        nameAr: 'وحدة عناية الحروق',
        classes: [
            { name: 'ICU', type: 'single', rooms: ['2201', '2202', '2203'] },
            { name: 'Burn Isolation Room', type: 'single', rooms: ['2204'] }
        ]
    },
    {
        id: '7TH_MALE',
        nameEn: 'SEVENTH FLOOR (MALE ADMISSION WARD)',
        nameAr: 'الدور السابع (جناح تنويم الرجال)',
        classes: [
            { name: 'Suite', type: 'single', rooms: ['7015', '7016'] },
            { name: 'First Class', type: 'single', rooms: ['7001', '7002', '7003', '7004', '7005', '7006', '7007', '7008', '7009', '7010', '7011', '7012', '7017', '7018', '7019', '7020', '7021', '7022'] },
            { name: 'Burn Isolation Room', type: 'single', rooms: ['7013', '7014'] }
        ]
    },
    {
        id: 'IMCU',
        nameEn: 'IMCU',
        nameAr: 'وحدة العناية المتوسطة',
        classes: [
            { name: 'IMCU', type: 'single', rooms: Array.from({length: 14}, (_, i) => (i + 1).toString()) },
            { name: 'Burn Isolation Room', type: 'single', rooms: ['15', '16'] }
        ]
    },
    {
        id: '5TH_FEMALE',
        nameEn: 'FIFTH FLOOR (FEMALE WARD 2)',
        nameAr: 'الدور الخامس (جناح النساء)',
        classes: [
            { name: 'Second Class', type: 'double', rooms: Array.from({length: 20}, (_, i) => (i + 5022).toString()) } // 5022 to 5041
        ]
    },
    {
        id: 'LTC',
        nameEn: 'LTC',
        nameAr: 'الرعاية الممتدة',
        classes: [
            { name: 'Second Class', type: 'double', rooms: Array.from({length: 20}, (_, i) => (i + 7023).toString()) } // 7023 to 7042
        ]
    },
    {
        id: 'LTC_B',
        nameEn: 'LTC-B',
        nameAr: 'الرعاية الممتدة B',
        classes: [
            { name: 'Second Class', type: 'double', rooms: Array.from({length: 20}, (_, i) => (i + 8023).toString()) } // 8023 to 8042
        ]
    },
    {
        id: '6TH_MALE_2',
        nameEn: 'SIXTH FLOOR (MALE ADMISSION WARD 2)',
        nameAr: 'الدور السادس (جناح تنويم رجال2)',
        classes: [
            { name: 'Second Class', type: 'double', rooms: Array.from({length: 20}, (_, i) => (i + 6023).toString()) } // 6023 to 6042
        ]
    }
];

export const mockUsers: User[] = [
    { id: '1', name: 'Admin User', email: 'admin@company.com', role: UserRole.ADMIN, department: 'IT', status: 'active', lastLogin: new Date().toISOString(), empCode: '1', password: '1', extension: '101', createdAt: new Date().toISOString() },
    { id: '2', name: 'Sarah Staff', email: 'sarah@company.com', role: UserRole.STAFF, department: 'HR', status: 'active', lastLogin: new Date(Date.now() - 86400000).toISOString(), empCode: 'ST001', password: 'password', extension: '102', createdAt: new Date().toISOString() },
    { id: '3', name: 'Mike Engineer', email: 'mike@company.com', role: UserRole.ENGINEER, department: 'IT', status: 'active', lastLogin: new Date().toISOString(), empCode: 'ENG001', password: 'password', extension: '103', createdAt: new Date().toISOString() },
    { id: '4', name: 'Steve Sup', email: 'steve@company.com', role: UserRole.SUPIT, department: 'IT', status: 'active', lastLogin: new Date().toISOString(), empCode: 'SUP001', password: 'password', extension: '104', createdAt: new Date().toISOString() },
    { id: '5', name: 'Dave Director', email: 'dave@company.com', role: UserRole.DIRECTORE_IT, department: 'IT', status: 'active', lastLogin: new Date().toISOString(), empCode: 'DIR001', password: 'password', extension: '105', createdAt: new Date().toISOString() },
    { id: '6', name: 'Medical Director', email: 'md@company.com', role: UserRole.MEDICAL_DIRECTOR, department: 'Medical', status: 'active', lastLogin: new Date().toISOString(), empCode: 'MED001', password: 'password', extension: '106', createdAt: new Date().toISOString() },
    { id: '7', name: 'Medical Secretary', email: 'ms@company.com', role: UserRole.MEDICAL_SECRETARY, department: 'Medical', status: 'active', lastLogin: new Date().toISOString(), empCode: 'SEC001', password: 'password', extension: '107', createdAt: new Date().toISOString() },
    { id: '8', name: 'HR Manager', email: 'hr@company.com', role: UserRole.HR_MANAGER, department: 'HR', status: 'active', lastLogin: new Date().toISOString(), empCode: 'HR001', password: 'password', extension: '108', createdAt: new Date().toISOString() }
];

export const mockTickets: Ticket[] = [
    {
        id: 'T-101',
        title: 'Printer not working',
        details: 'The printer in the HR department is jammed.',
        status: TicketStatus.OPEN,
        type: 'Hardware Issue',
        priority: 'high',
        requester: mockUsers[1],
        assignedTo: mockUsers[2],
        location: 'HR Office',
        attachments: [],
        history: [],
        createdAt: new Date(Date.now() - 3600000),
        department: 'HR'
    },
    {
        id: 'T-102',
        title: 'Software Installation',
        details: 'Need Adobe Acrobat installed.',
        status: TicketStatus.IN_PROGRESS,
        type: 'Software Issue',
        priority: 'medium',
        requester: mockUsers[1],
        assignedTo: mockUsers[2],
        location: 'HR Office',
        attachments: [],
        history: [],
        createdAt: new Date(Date.now() - 86400000),
        department: 'HR'
    }
];

export const mockInventory: InventoryItem[] = [
    {
        id: 'INV-001',
        name: 'Dell Latitude 5420',
        model: 'Latitude 5420',
        serialNumber: 'ABC12345',
        category: 'computers',
        status: 'assigned',
        location: 'HR Office',
        assignedTo: 'Sarah Staff',
        assignedDepartment: 'HR',
        purchaseDate: '2023-01-15',
        cost: 1200,
        specifications: { CPU: 'i7', RAM: '16GB' },
        icon: 'Monitor',
        lastUpdated: new Date().toISOString()
    },
    {
        id: 'INV-002',
        name: 'HP LaserJet Pro',
        model: 'M404dn',
        serialNumber: 'PRT98765',
        category: 'printers',
        status: 'available',
        location: 'IT Storage',
        purchaseDate: '2023-02-20',
        cost: 400,
        specifications: { Type: 'Laser', Color: 'BW' },
        icon: 'Printer',
        lastUpdated: new Date().toISOString()
    }
];

export const mockNotifications: Notification[] = [
    { id: '1', userId: '1', message: 'New ticket created: T-101', read: false, timestamp: new Date(), link: 'tickets/T-101' },
    { id: '2', userId: '2', message: 'Your ticket T-102 is in progress', read: true, timestamp: new Date(Date.now() - 3600000), link: 'tickets/T-102' }
];

export const mockMessages: ChatMessage[] = [
    { id: '1', sender: mockUsers[1], receiver: mockUsers[2], text: 'Hi, when can you fix the printer?', timestamp: new Date(Date.now() - 1800000), read: true },
    { id: '2', sender: mockUsers[2], receiver: mockUsers[1], text: 'I will be there in 10 mins.', timestamp: new Date(Date.now() - 900000), read: false }
];

export const mockQuickLinks: QuickLink[] = [
    { id: '1', label: 'Company Portal', url: 'https://portal.company.com', visibility: 'public' },
    { id: '2', label: 'IT Support Guide', url: 'https://support.company.com', visibility: 'public' }
];

export const mockDepartments = ['IT', 'HR', 'Finance', 'Operations', 'Medical'];

export const mockEmployees: Employee[] = [
    { id: 1, name: "John Doe", email: "john@example.com", department: "IT", extension: "101", role: "Engineer" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", department: "HR", extension: "102", role: "Manager" }
];

export const mockRecentActivities: Activity[] = [
    { id: 1, type: "user_created", title: "New User Added", description: "Admin added Sarah Staff", user: "Admin User", timestamp: new Date(Date.now() - 100000) },
    { id: 2, type: "system_alert", title: "System Update", description: "System maintained successfully", user: "System", timestamp: new Date(Date.now() - 200000) }
];

export const mockIPTVShifts: IPTVShift[] = [];
export const mockEngineerShifts: EngineerShift[] = [];
export const mockIPTVChecklist: IPTVChecklistItem[] = [];
export const mockAdmissionScreens: AdmissionScreen[] = [];
export const mockAdmissionScreenLogs: AdmissionScreenLog[] = [];
export const mockStaffNotifications: StaffNotification[] = [];
export const mockStaffChatMessages: StaffChatMessage[] = [];
export const mockSupervisorNotifications: SupervisorNotification[] = [];
export const mockSupervisorChatMessages: SupervisorChatMessage[] = [];
export const mockPendingRequests: PendingRequest[] = [];
export const mockAnalyticsData: TeamAnalytics = { resolutionTime: 4.5, firstResponseTime: 0.5, satisfactionRate: 98, closedTickets: 45 };
export const mockEngineers: Engineer[] = mockUsers.filter(u => u.role === UserRole.ENGINEER).map(u => ({...u, tasks: [], performance: 95, specialization: 'General'}));
