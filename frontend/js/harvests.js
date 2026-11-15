async function loadHarvests() {
    try {
        const harvests = await api.get('/harvests');
        const tbody = document.getElementById('harvest-table-body');
        tbody.innerHTML = '';
        harvests.forEach(h => {
            tbody.innerHTML += `
                <tr>
                    <td>${new Date(h.date).toLocaleDateString()}</td>
                    <td>${h.lot}</td>
                    <td>${h.quantity} kg</td>
                    <td>${h.pricePerKg} FCFA</td>
                    <td>${h.totalAmount.toLocaleString()} FCFA</td>
                </tr>`;
        });
    } catch (error) { console.error("Erreur récoltes:", error); }
}

document.getElementById('harvest-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = {
        date: document.getElementById('harvest-date').value,
        lot: document.getElementById('harvest-lot').value,
        quantity: Number(document.getElementById('harvest-quantity').value),
        pricePerKg: Number(document.getElementById('harvest-price').value)
    };
    try {
        await api.post('/harvests', data);
        alert('Récolte enregistrée !');
        document.getElementById('harvest-form').reset();
        toggleForm('harvest');
        loadHarvests();
        loadDashboard();
    } catch (error) { alert(error.message); }
});