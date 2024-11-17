// Dados para o gráfico
const ctx = document.getElementById('consumoGrafico').getContext('2d');

const consumoGrafico = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Suco Natural', 'Suco de Laranja', 'Suco Verde', 'Outros'],
        datasets: [{
            label: 'Consumo Médio (litros por pessoa/ano)',
            data: [50, 40, 10, 20],
            backgroundColor: [
                'rgba(75, 192, 192, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 99, 132, 0.7)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
