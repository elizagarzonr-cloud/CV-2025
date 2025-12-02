document.addEventListener('DOMContentLoaded', function() {
    
    // --- GRÁFICO 1: MI DÍA A DÍA (Dona) ---
    const ctxDay = document.getElementById('dayChart').getContext('2d');
    new Chart(ctxDay, {
        type: 'doughnut',
        data: {
            labels: ['Gestión Estratégica', 'Análisis Datos/IA', 'Campo/Operativo', 'Admin/Legal'],
            datasets: [{
                data: [30, 30, 20, 20],
                backgroundColor: ['#5e35b1', '#9575cd', '#b39ddb', '#2c3e50'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false } 
            },
            cutout: '65%'
        }
    });

    // --- GRÁFICO 2: RADAR DE COMPETENCIAS (Spider Chart) ---
    const ctxSkill = document.getElementById('skillRadar').getContext('2d');
    new Chart(ctxSkill, {
        type: 'radar',
        data: {
            labels: ['Normativa SST', 'Python & Data', 'Liderazgo', 'Idiomas (Ger/Spa)', 'Estrategia IA'],
            datasets: [{
                label: 'Nivel de Competencia',
                data: [95, 80, 90, 85, 75], 
                fill: true,
                backgroundColor: 'rgba(94, 53, 177, 0.2)', 
                borderColor: '#5e35b1',
                pointBackgroundColor: '#2c3e50',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#5e35b1'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: { display: true, color: '#eee' },
                    grid: { color: '#eee' },
                    pointLabels: {
                        font: { size: 11, family: "'Roboto', sans-serif" },
                        color: '#333'
                    },
                    suggestedMin: 0,
                    suggestedMax: 100,
                    ticks: { display: false }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
});