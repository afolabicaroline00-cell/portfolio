// Initialize charts when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Publication Trends Chart
    const pubCtx = document.getElementById('publicationsChart');
    if (pubCtx) {
        new Chart(pubCtx, {
            type: 'line',
            data: {
                labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
                datasets: [{
                    label: 'Publications',
                    data: [5, 7, 12, 8, 10, 15],
                    borderColor: '#2E5BFF',
                    backgroundColor: 'rgba(46, 91, 255, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0,0,0,0.05)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }
    
    // Research Topics Chart
    const topicsCtx = document.getElementById('topicsChart');
    if (topicsCtx) {
        new Chart(topicsCtx, {
            type: 'doughnut',
            data: {
                labels: ['Infectious Diseases', 'AMR Research', 'Genomics', 'Epidemiology', 'Public Health'],
                datasets: [{
                    data: [35, 25, 20, 15, 5],
                    backgroundColor: [
                        '#2E5BFF',
                        '#00C1D4',
                        '#FF6B6B',
                        '#00D68F',
                        '#FFAA00'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            boxWidth: 12,
                            padding: 15
                        }
                    }
                }
            }
        });
    }
    
    // Initialize research map (simplified version)
    initializeResearchMap();
});

// Simple research map implementation
function initializeResearchMap() {
    const mapContainer = document.getElementById('researchMap');
    if (!mapContainer) return;
    
    // Create a simple SVG map or use an iframe for Google Maps
    // For now, let's create a simple representation
    mapContainer.innerHTML = `
        <div style="
            width: 100%;
            height: 100%;
            background: #f0f2f5;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            overflow: hidden;
            position: relative;
        ">
            <div style="
                position: relative;
                width: 80%;
                height: 80%;
                background: white;
                border-radius: 4px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            ">
                <!-- Africa outline -->
                <div style="
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 70%;
                    height: 70%;
                    background: #e8f4f8;
                    border: 2px solid #00C1D4;
                    border-radius: 4px;
                ">
                    <!-- Research location markers -->
                    <div style="
                        position: absolute;
                        top: 40%;
                        left: 45%;
                        width: 12px;
                        height: 12px;
                        background: #FF6B6B;
                        border-radius: 50%;
                        transform: translate(-50%, -50%);
                        box-shadow: 0 0 0 4px rgba(255, 107, 107, 0.3);
                    "></div>
                    <div style="
                        position: absolute;
                        top: 35%;
                        left: 40%;
                        width: 10px;
                        height: 10px;
                        background: #2E5BFF;
                        border-radius: 50%;
                        transform: translate(-50%, -50%);
                        box-shadow: 0 0 0 4px rgba(46, 91, 255, 0.3);
                    "></div>
                    <div style="
                        position: absolute;
                        top: 50%;
                        left: 55%;
                        width: 8px;
                        height: 8px;
                        background: #00D68F;
                        border-radius: 50%;
                        transform: translate(-50%, -50%);
                        box-shadow: 0 0 0 4px rgba(0, 214, 143, 0.3);
                    "></div>
                </div>
                <div style="
                    position: absolute;
                    bottom: 10px;
                    left: 10px;
                    font-size: 11px;
                    color: #666;
                ">
                    <div style="display: flex; align-items: center; margin-bottom: 4px;">
                        <div style="width: 8px; height: 8px; background: #FF6B6B; border-radius: 50%; margin-right: 6px;"></div>
                        <span>Ongoing Research</span>
                    </div>
                    <div style="display: flex; align-items: center;">
                        <div style="width: 8px; height: 8px; background: #2E5BFF; border-radius: 50%; margin-right: 6px;"></div>
                        <span>Completed Projects</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Update dashboard metrics periodically
function updateDashboardMetrics() {
    // This function could fetch real-time data from an API
    const stats = document.querySelectorAll('.stat-item h4');
    if (stats.length > 0) {
        // Simulate data updates
        stats[0].textContent = '1,925+';
        stats[1].textContent = '46';
    }
}

// Initialize auto-update every 30 seconds
setInterval(updateDashboardMetrics, 30000);