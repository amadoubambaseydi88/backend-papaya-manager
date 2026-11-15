async function loadDashboard() {
    try {
        const stats = await api.get('/dashboard');
        document.getElementById('stat-total-harvest').innerText = `${stats.totalHarvestedKg} kg`;
        document.getElementById('stat-total-sales').innerText = `${stats.totalSalesValue.toLocaleString()} FCFA`;
        document.getElementById('stat-current-stock').innerText = `${stats.currentStock} kg`;
        document.getElementById('stat-clients').innerText = stats.uniqueClients;
    } catch (error) { console.error("Erreur dashboard:", error); }
}