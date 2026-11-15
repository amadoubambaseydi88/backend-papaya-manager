function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(`${sectionId}-section`).classList.add('active');
    const titles = { 'dashboard': 'Tableau de bord', 'harvests': 'Historique des récoltes', 'sales': 'Gestion des ventes' };
    document.getElementById('page-title').innerText = titles[sectionId];

    if(sectionId === 'dashboard') loadDashboard();
    if(sectionId === 'harvests') loadHarvests();
    if(sectionId === 'sales') loadSales();
}

function toggleForm(type) {
    document.getElementById(`${type}-form-container`).classList.toggle('hidden');
}

document.addEventListener('DOMContentLoaded', () => { loadDashboard(); });