async function loadSales() {
    try {
        const sales = await api.get('/sales');
        const tbody = document.getElementById('sale-table-body');
        tbody.innerHTML = '';
        sales.forEach(s => {
            tbody.innerHTML += `
                <tr>
                    <td>${new Date(s.date).toLocaleDateString()}</td>
                    <td>${s.client}</td>
                    <td>${s.quantity} kg</td>
                    <td>${s.pricePerKg} FCFA</td>
                    <td>${s.totalAmount.toLocaleString()} FCFA</td>
                </tr>`;
        });
    } catch (error) { console.error("Erreur ventes:", error); }
}

document.getElementById('sale-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = {
        date: document.getElementById('sale-date').value,
        client: document.getElementById('sale-client').value,
        quantity: Number(document.getElementById('sale-quantity').value),
        pricePerKg: Number(document.getElementById('sale-price').value)
    };
    try {
        await api.post('/sales', data);
        alert('Vente enregistrée !');
        document.getElementById('sale-form').reset();
        toggleForm('sale');
        loadSales();
        loadDashboard();
    } catch (error) { alert(error.message); }
});