// ⚠️ REMPLACEZ CETTE URL PAR CELLE DE VOTRE BACKEND SUR RENDER
// Exemple : 'https://papaya-api.onrender.com/api'
const API_URL = 'https://backend-papaya-manager.onrender.com/api'; 

const api = {
    get: async (endpoint) => {
        try {
            const res = await fetch(`${API_URL}${endpoint}`);
            if (!res.ok) throw new Error('Erreur réseau');
            return await res.json();
        } catch (error) {
            console.error("Erreur API GET:", error);
            return [];
        }
    },
    post: async (endpoint, data) => {
        const res = await fetch(`${API_URL}${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const json = await res.json();
        if(!res.ok) throw new Error(json.message || 'Erreur serveur');
        return json;
    }
};