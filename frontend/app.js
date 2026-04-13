const views = document.querySelectorAll('.view');
const navButtons = document.querySelectorAll('.nav-button');
const requestForm = document.getElementById('requestForm');
const formType = document.getElementById('formType');
const firewallFields = document.querySelectorAll('.firewall-fields');
const infoServiceFields = document.querySelectorAll('.info-service-fields');
const authInventoryFields = document.querySelectorAll('.auth-inventory-fields');
const correctiveFields = document.querySelectorAll('.corrective-fields');
const sysDevelopFields = document.querySelectorAll('.sys-develop-fields');
const requestList = document.getElementById('requestList');
const recentRequests = document.getElementById('recentRequests');
const reviewList = document.getElementById('reviewList');
const pendingCount = document.getElementById('pendingCount');
const inProgressCount = document.getElementById('inProgressCount');
const closedCount = document.getElementById('closedCount');
const evaluationForm = document.getElementById('evaluationForm');

const mockData = [
    { formId: '2026-FIREWALL-001', docNo: 'IS-D-022', applyDate: '2026-04-10', status: 'PENDING', type: 'Firewall' },
    { formId: '2026-SYS-002', docNo: 'IS-D-045', applyDate: '2026-04-08', status: 'IN_PROGRESS', type: 'System Development' },
    { formId: '2026-AUTH-003', docNo: 'IS-D-029', applyDate: '2026-04-05', status: 'CLOSED', type: 'Auth Inventory' }
];

function updateDashboard() {
    pendingCount.textContent = mockData.filter(item => item.status === 'PENDING').length;
    inProgressCount.textContent = mockData.filter(item => item.status === 'IN_PROGRESS').length;
    closedCount.textContent = mockData.filter(item => item.status === 'CLOSED').length;

    recentRequests.innerHTML = mockData.slice(0, 3).map(item => `
        <tr>
            <td>${item.formId}</td>
            <td>${item.docNo}</td>
            <td>${item.applyDate}</td>
            <td>${item.status}</td>
        </tr>
    `).join('');
}

function updateRequestList() {
    requestList.innerHTML = mockData.map(item => `
        <tr>
            <td>${item.formId}</td>
            <td>${item.docNo}</td>
            <td>${item.applyDate}</td>
            <td>${item.status}</td>
            <td><button type="button" onclick="alert('檢視 ${item.formId}')">檢視</button></td>
        </tr>
    `).join('');
}

function updateReviewList() {
    reviewList.innerHTML = mockData.filter(item => item.status === 'PENDING').map(item => `
        <tr>
            <td>${item.formId}</td>
            <td>${item.docNo}</td>
            <td>${item.applyDate}</td>
            <td>王主管</td>
            <td>${item.status}</td>
        </tr>
    `).join('');
}

function setFormVisibility(type) {
    // Hide all form sections
    firewallFields.forEach(field => field.classList.add('hidden'));
    infoServiceFields.forEach(field => field.classList.add('hidden'));
    authInventoryFields.forEach(field => field.classList.add('hidden'));
    correctiveFields.forEach(field => field.classList.add('hidden'));
    sysDevelopFields.forEach(field => field.classList.add('hidden'));

    // Show relevant section based on type
    if (type === 'FIREWALL') {
        firewallFields.forEach(field => field.classList.remove('hidden'));
    } else if (type === 'INFO_SERVICE') {
        infoServiceFields.forEach(field => field.classList.remove('hidden'));
    } else if (type === 'AUTH_INVENTORY') {
        authInventoryFields.forEach(field => field.classList.remove('hidden'));
    } else if (type === 'CORRECTIVE') {
        correctiveFields.forEach(field => field.classList.remove('hidden'));
    } else if (type === 'SYS_DEVELOP') {
        sysDevelopFields.forEach(field => field.classList.remove('hidden'));
    }
}

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        navButtons.forEach(item => item.classList.remove('active'));
        button.classList.add('active');
        const target = button.dataset.view;
        views.forEach(view => view.id === target ? view.classList.add('active') : view.classList.remove('active'));
    });
});

formType.addEventListener('change', event => {
    setFormVisibility(event.target.value);
});

requestForm.addEventListener('submit', event => {
    event.preventDefault();
    alert('申請已送出，請等待簽核。');
    requestForm.reset();
    setFormVisibility(formType.value);
});

const saveDraft = document.getElementById('saveDraft');
saveDraft.addEventListener('click', () => {
    alert('草稿已儲存。');
});

evaluationForm.addEventListener('submit', event => {
    event.preventDefault();
    alert('系統開發評估結果已提交。');
    evaluationForm.reset();
});

window.addEventListener('DOMContentLoaded', () => {
    updateDashboard();
    updateRequestList();
    updateReviewList();
    setFormVisibility(formType.value);
});
