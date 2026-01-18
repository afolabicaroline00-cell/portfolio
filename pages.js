// Publications Data (in a real implementation, this would come from an API)
const publicationsData = [
    {
        id: 1,
        year: '2023',
        type: 'journal',
        journal: 'Nature Communications',
        impactFactor: '17.69',
        title: 'Genomic epidemiology of SARS-CoV-2 variants in Nigeria reveals early detection and spread patterns',
        authors: 'Afolabi, C., Adekunle, A., Mohammed, S., Okafor, H., Bello, M., Yusuf, A., Nwachukwu, W., Okonkwo, P., Danjuma, I.',
        abstract: 'This study presents comprehensive genomic surveillance data from Nigeria, revealing patterns of SARS-CoV-2 variant introduction and spread across West Africa. We analyzed 5,243 SARS-CoV-2 genomes collected between March 2020 and December 2022, identifying multiple independent introductions of variants of concern. Our findings demonstrate that variant detection in Nigeria occurred an average of 4-6 weeks after initial global reports, highlighting the importance of regional genomic surveillance networks for early detection and response.',
        citations: 45,
        doi: '10.1038/s41467-023-40175-3',
        pdf: '../assets/pdfs/pub1.pdf',
        url: 'https://www.nature.com/articles/s41467-023-40175-3',
        keywords: ['SARS-CoV-2', 'Genomic surveillance', 'Nigeria', 'Variants of concern', 'Epidemiology'],
        funding: 'National Institutes of Health (NIH)',
        pages: '1-15',
        volume: '14',
        issue: '1'
    },
    {
        id: 2,
        year: '2022',
        type: 'journal',
        journal: 'The Lancet Microbe',
        impactFactor: '86.21',
        title: 'Antimicrobial resistance in clinical isolates from tertiary hospitals in West Africa: A multicentre surveillance study',
        authors: 'Afolabi, C., Ibrahim, M., Okonkwo, P., Adeyemi, O., Samuel, F., Mohammed, K., Nwankwo, E.',
        abstract: 'This multicentre surveillance study assessed antimicrobial resistance patterns in bacterial isolates from five tertiary hospitals across Nigeria and Ghana. We analyzed 2,847 clinical isolates collected between January 2019 and December 2021, identifying high rates of multidrug-resistant organisms, particularly among Gram-negative bacteria. Carbapenem resistance was detected in 35% of Klebsiella pneumoniae isolates, highlighting an urgent need for enhanced antimicrobial stewardship and infection control measures in the region.',
        citations: 32,
        doi: '10.1016/S2666-5247(22)00123-4',
        pdf: '../assets/pdfs/pub2.pdf',
        url: 'https://www.thelancet.com/journals/lanmic/article/PIIS2666-5247(22)00123-4/fulltext',
        keywords: ['Antimicrobial resistance', 'West Africa', 'Surveillance', 'Multidrug resistance', 'Healthcare'],
        funding: 'Wellcome Trust',
        pages: 'e123-e135',
        volume: '3',
        issue: '3'
    },
    {
        id: 3,
        year: '2021',
        type: 'journal',
        journal: 'PLOS Pathogens',
        impactFactor: '7.46',
        title: 'Molecular characterization of malaria parasites in Nigeria reveals genetic diversity and drug resistance markers',
        authors: 'Afolabi, C., Nwachukwu, W., Bello, M., Yusuf, A., Okafor, H.',
        abstract: 'Genetic analysis of Plasmodium falciparum isolates from different regions of Nigeria revealed significant genetic diversity and identified key drug resistance mutations. Our study analyzed 1,245 parasite samples collected from six states, demonstrating regional variation in resistance patterns. The high prevalence of mutations associated with artemisinin resistance underscores the need for continuous monitoring and potential adjustment of treatment guidelines in the region.',
        citations: 28,
        doi: '10.1371/journal.ppat.1009328',
        pdf: '../assets/pdfs/pub3.pdf',
        url: 'https://journals.plos.org/plospathogens/article?id=10.1371/journal.ppat.1009328',
        keywords: ['Malaria', 'Plasmodium falciparum', 'Drug resistance', 'Genetic diversity', 'Nigeria'],
        funding: 'Bill & Melinda Gates Foundation',
        pages: 'e1009328',
        volume: '17',
        issue: '4'
    },
    {
        id: 4,
        year: '2020',
        type: 'conference',
        journal: 'International Conference on Infectious Diseases',
        title: 'Outbreak investigation of Lassa fever in Nigeria: Epidemiological and clinical characteristics',
        authors: 'Afolabi, C., Danjuma, I., Okafor, H., Mohammed, S.',
        abstract: 'This study presents findings from a major Lassa fever outbreak investigation in Nigeria, analyzing epidemiological patterns, risk factors, and clinical outcomes. Our analysis of 587 confirmed cases revealed important insights into transmission dynamics and identified key factors associated with severe disease outcomes.',
        citations: 15,
        doi: '10.1109/ICID2020.12345',
        pdf: '../assets/pdfs/pub4.pdf',
        url: '#',
        keywords: ['Lassa fever', 'Outbreak investigation', 'Nigeria', 'Epidemiology'],
        funding: 'WHO',
        pages: '45-52',
        conference: 'ICID 2020'
    },
    {
        id: 5,
        year: '2019',
        type: 'chapter',
        journal: 'Advances in Tropical Medicine',
        title: 'Emerging infectious diseases in West Africa: Challenges and opportunities',
        authors: 'Afolabi, C., Adekunle, A.',
        abstract: 'This book chapter reviews the current landscape of emerging infectious diseases in West Africa, discussing challenges in surveillance, diagnosis, and control, while highlighting opportunities for regional collaboration and capacity building.',
        citations: 12,
        doi: '10.1007/978-3-030-12345-6_8',
        pdf: '../assets/pdfs/pub5.pdf',
        url: '#',
        keywords: ['Emerging diseases', 'West Africa', 'Surveillance', 'Public health'],
        funding: 'None',
        pages: '123-145',
        book: 'Advances in Tropical Medicine, 2nd Edition'
    },
    {
        id: 6,
        year: '2018',
        type: 'review',
        journal: 'Clinical Microbiology Reviews',
        impactFactor: '45.6',
        title: 'Advances in diagnostic technologies for infectious diseases in resource-limited settings',
        authors: 'Afolabi, C., Ibrahim, M., Okonkwo, P.',
        abstract: 'Comprehensive review of recent advances in diagnostic technologies for infectious diseases, with a focus on applications in resource-limited settings. We discuss point-of-care tests, molecular diagnostics, and emerging technologies, highlighting their potential impact on disease management and control.',
        citations: 67,
        doi: '10.1128/CMR.00123-18',
        pdf: '../assets/pdfs/pub6.pdf',
        url: 'https://journals.asm.org/doi/10.1128/CMR.00123-18',
        keywords: ['Diagnostics', 'Infectious diseases', 'Resource-limited', 'Point-of-care', 'Molecular diagnostics'],
        funding: 'NIH',
        pages: 'e00123-18',
        volume: '31',
        issue: '4'
    }
];

// Global variables
let currentPage = 1;
const itemsPerPage = 5;
let filteredPublications = [...publicationsData];
let currentFilter = 'all';
let currentSort = 'newest';

// Initialize publications page
function loadAllPublications() {
    renderPublications();
    updatePagination();
}

// Render publications based on current filter and sort
function renderPublications() {
    const container = document.getElementById('publicationsGrid');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Calculate start and end indices for pagination
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pagePublications = filteredPublications.slice(startIndex, endIndex);
    
    if (pagePublications.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No publications found</h3>
                <p>Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }
    
    pagePublications.forEach(pub => {
        const pubElement = createPublicationElement(pub);
        container.appendChild(pubElement);
    });
}

// Create publication element
function createPublicationElement(pub) {
    const div = document.createElement('div');
    div.className = 'publication-item fade-in';
    div.dataset.id = pub.id;
    div.dataset.type = pub.type;
    
    // Get icon based on type
    const icon = getPublicationIcon(pub.type);
    
    div.innerHTML = `
        <div class="pub-icon">
            <i class="${icon}"></i>
        </div>
        <div class="pub-content">
            <div class="pub-header">
                <span class="pub-year">${pub.year}</span>
                ${pub.impactFactor ? `<span class="pub-impact">IF: ${pub.impactFactor}</span>` : ''}
            </div>
            <span class="pub-type">${getPublicationType(pub.type)}</span>
            <span class="pub-journal">${pub.journal}</span>
            <h3 class="pub-title">${pub.title}</h3>
            <p class="pub-authors">${pub.authors}</p>
            <p class="pub-abstract">${pub.abstract.substring(0, 200)}...</p>
            <div class="pub-metrics">
                <div class="metric-item">
                    <i class="fas fa-quote-right"></i>
                    <span>${pub.citations} citations</span>
                </div>
                <div class="metric-item">
                    <i class="fas fa-eye"></i>
                    <span>View Details</span>
                </div>
            </div>
            <div class="pub-actions">
                <a href="${pub.url || '#'}" target="_blank" class="action-btn">
                    <i class="fas fa-external-link-alt"></i> View Online
                </a>
                ${pub.pdf ? `<a href="${pub.pdf}" class="action-btn" target="_blank">
                    <i class="fas fa-file-pdf"></i> PDF
                </a>` : ''}
                <button class="action-btn view-details" data-id="${pub.id}">
                    <i class="fas fa-info-circle"></i> Details
                </button>
            </div>
        </div>
    `;
    
    // Add click event for viewing details
    div.querySelector('.view-details').addEventListener('click', (e) => {
        e.stopPropagation();
        showPublicationDetails(pub.id);
    });
    
    // Add click event for the whole card
    div.addEventListener('click', (e) => {
        if (!e.target.closest('.action-btn')) {
            showPublicationDetails(pub.id);
        }
    });
    
    return div;
}

// Get publication icon based on type
function getPublicationIcon(type) {
    const icons = {
        'journal': 'fas fa-book',
        'conference': 'fas fa-users',
        'chapter': 'fas fa-book-open',
        'review': 'fas fa-star'
    };
    return icons[type] || 'fas fa-file-alt';
}

// Get publication type label
function getPublicationType(type) {
    const types = {
        'journal': 'Journal Article',
        'conference': 'Conference Paper',
        'chapter': 'Book Chapter',
        'review': 'Review Article'
    };
    return types[type] || 'Publication';
}

// Initialize filters
function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('searchInput');
    const sortSelect = document.getElementById('sortSelect');
    
    // Filter button events
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            applyFilters();
        });
    });
    
    // Search input event
    if (searchInput) {
        searchInput.addEventListener('input', debounce(() => {
            applyFilters();
        }, 300));
    }
    
    // Sort select event
    if (sortSelect) {
        sortSelect.addEventListener('change', () => {
            currentSort = sortSelect.value;
            applySort();
        });
    }
}

// Apply filters and sorting
function applyFilters() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    
    filteredPublications = publicationsData.filter(pub => {
        // Apply type filter
        if (currentFilter !== 'all' && pub.type !== currentFilter) {
            return false;
        }
        
        // Apply search filter
        if (searchTerm) {
            const searchFields = [
                pub.title,
                pub.authors,
                pub.journal,
                pub.abstract,
                pub.keywords ? pub.keywords.join(' ') : ''
            ].join(' ').toLowerCase();
            
            if (!searchFields.includes(searchTerm)) {
                return false;
            }
        }
        
        return true;
    });
    
    applySort();
}

// Apply sorting
function applySort() {
    switch (currentSort) {
        case 'newest':
            filteredPublications.sort((a, b) => b.year - a.year);
            break;
        case 'oldest':
            filteredPublications.sort((a, b) => a.year - b.year);
            break;
        case 'citations':
            filteredPublications.sort((a, b) => b.citations - a.citations);
            break;
        case 'impact':
            filteredPublications.sort((a, b) => {
                const aImpact = a.impactFactor ? parseFloat(a.impactFactor) : 0;
                const bImpact = b.impactFactor ? parseFloat(b.impactFactor) : 0;
                return bImpact - aImpact;
            });
            break;
    }
    
    currentPage = 1;
    renderPublications();
    updatePagination();
}

// Update pagination
function updatePagination() {
    const totalPages = Math.ceil(filteredPublications.length / itemsPerPage);
    const pageNumbers = document.getElementById('pageNumbers');
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');
    
    if (!pageNumbers) return;
    
    // Update buttons
    if (prevBtn) {
        prevBtn.disabled = currentPage === 1;
        prevBtn.onclick = () => {
            if (currentPage > 1) {
                currentPage--;
                renderPublications();
                updatePagination();
            }
        };
    }
    
    if (nextBtn) {
        nextBtn.disabled = currentPage === totalPages;
        nextBtn.onclick = () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderPublications();
                updatePagination();
            }
        };
    }
    
    // Update page numbers
    pageNumbers.innerHTML = '';
    
    const maxVisible = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let endPage = Math.min(totalPages, startPage + maxVisible - 1);
    
    if (endPage - startPage + 1 < maxVisible) {
        startPage = Math.max(1, endPage - maxVisible + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement('span');
        pageBtn.className = `page-number ${i === currentPage ? 'active' : ''}`;
        pageBtn.textContent = i;
        pageBtn.onclick = () => {
            currentPage = i;
            renderPublications();
            updatePagination();
        };
        pageNumbers.appendChild(pageBtn);
    }
}

// Initialize modal
function initModal() {
    const modal = document.getElementById('publicationModal');
    const closeBtn = document.querySelector('.close-modal');
    
    if (!modal) return;
    
    // Close modal when clicking X
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.style.display = 'none';
        }
    });
}

// Show publication details in modal
function showPublicationDetails(id) {
    const pub = publicationsData.find(p => p.id === id);
    if (!pub) return;
    
    const modal = document.getElementById('publicationModal');
    const modalBody = document.getElementById('modalBody');
    
    if (!modal || !modalBody) return;
    
    modalBody.innerHTML = `
        <div class="modal-header">
            <h2 class="modal-title">${pub.title}</h2>
            <span class="pub-year">${pub.year}</span>
        </div>
        
        <div class="modal-abstract">
            <h4>Abstract</h4>
            <p>${pub.abstract}</p>
        </div>
        
        <div class="modal-details">
            <h4>Publication Details</h4>
            <div class="detail-row">
                <span class="detail-label">Journal:</span>
                <span class="detail-value">${pub.journal}</span>
            </div>
            ${pub.impactFactor ? `
            <div class="detail-row">
                <span class="detail-label">Impact Factor:</span>
                <span class="detail-value">${pub.impactFactor}</span>
            </div>` : ''}
            <div class="detail-row">
                <span class="detail-label">Authors:</span>
                <span class="detail-value">${pub.authors}</span>
            </div>
            ${pub.volume ? `
            <div class="detail-row">
                <span class="detail-label">Volume/Issue:</span>
                <span class="detail-value">${pub.volume}(${pub.issue})</span>
            </div>` : ''}
            ${pub.pages ? `
            <div class="detail-row">
                <span class="detail-label">Pages:</span>
                <span class="detail-value">${pub.pages}</span>
            </div>` : ''}
            <div class="detail-row">
                <span class="detail-label">DOI:</span>
                <span class="detail-value">${pub.doi}</span>
            </div>
            ${pub.citations ? `
            <div class="detail-row">
                <span class="detail-label">Citations:</span>
                <span class="detail-value">${pub.citations}</span>
            </div>` : ''}
            ${pub.keywords ? `
            <div class="detail-row">
                <span class="detail-label">Keywords:</span>
                <span class="detail-value">${pub.keywords.join(', ')}</span>
            </div>` : ''}
            ${pub.funding ? `
            <div class="detail-row">
                <span class="detail-label">Funding:</span>
                <span class="detail-value">${pub.funding}</span>
            </div>` : ''}
        </div>
        
        <div class="modal-actions">
            ${pub.url ? `
            <a href="${pub.url}" target="_blank" class="modal-btn">
                <i class="fas fa-external-link-alt"></i> View Online
            </a>` : ''}
            ${pub.pdf ? `
            <a href="${pub.pdf}" target="_blank" class="modal-btn">
                <i class="fas fa-file-pdf"></i> Download PDF
            </a>` : ''}
            <button class="modal-btn secondary copy-doi" data-doi="${pub.doi}">
                <i class="fas fa-copy"></i> Copy DOI
            </button>
            <button class="modal-btn secondary cite-btn" data-id="${pub.id}">
                <i class="fas fa-quote-right"></i> Cite
            </button>
        </div>
    `;
    
    // Add event listeners for modal buttons
    const copyDoiBtn = modalBody.querySelector('.copy-doi');
    if (copyDoiBtn) {
        copyDoiBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(pub.doi).then(() => {
                const originalText = copyDoiBtn.innerHTML;
                copyDoiBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                setTimeout(() => {
                    copyDoiBtn.innerHTML = originalText;
                }, 2000);
            });
        });
    }
    
    const citeBtn = modalBody.querySelector('.cite-btn');
    if (citeBtn) {
        citeBtn.addEventListener('click', () => {
            showCitationOptions(pub);
        });
    }
    
    modal.style.display = 'block';
}

// Show citation options
function showCitationOptions(pub) {
    const citationText = generateCitation(pub);
    
    // Create citation modal
    const citationModal = document.createElement('div');
    citationModal.className = 'modal';
    citationModal.id = 'citationModal';
    citationModal.innerHTML = `
        <div class="modal-content" style="max-width: 600px;">
            <span class="close-modal">&times;</span>
            <div class="modal-body">
                <h3>Citation</h3>
                <div class="citation-box">
                    <pre>${citationText}</pre>
                </div>
                <div class="modal-actions">
                    <button class="modal-btn copy-citation">
                        <i class="fas fa-copy"></i> Copy Citation
                    </button>
                    <button class="modal-btn secondary" id="closeCitationModal">
                        Close
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(citationModal);
    
    // Show modal
    citationModal.style.display = 'block';
    
    // Add event listeners
    citationModal.querySelector('.close-modal').onclick = () => {
        citationModal.style.display = 'none';
    };
    
    citationModal.querySelector('#closeCitationModal').onclick = () => {
        citationModal.style.display = 'none';
    };
    
    citationModal.querySelector('.copy-citation').onclick = () => {
        navigator.clipboard.writeText(citationText).then(() => {
            const btn = citationModal.querySelector('.copy-citation');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            setTimeout(() => {
                btn.innerHTML = originalText;
            }, 2000);
        });
    };
    
    // Close when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === citationModal) {
            citationModal.style.display = 'none';
        }
    });
}

// Generate citation text
function generateCitation(pub) {
    const authors = pub.authors.split(', ').slice(0, 3).join(', ');
    const year = pub.year;
    const title = pub.title;
    const journal = pub.journal;
    const volume = pub.volume || '';
    const issue = pub.issue || '';
    const pages = pub.pages || '';
    const doi = pub.doi;
    
    return `${authors} (${year}). ${title}. ${journal}, ${volume}(${issue}), ${pages}. https://doi.org/${doi}`;
}

// Initialize export functionality
function initExport() {
    const exportButtons = document.querySelectorAll('.export-btn');
    
    exportButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const format = btn.dataset.format;
            exportPublications(format);
        });
    });
}

// Export publications in different formats
function exportPublications(format) {
    switch (format) {
        case 'bibtex':
            exportBibTeX();
            break;
        case 'ris':
            exportRIS();
            break;
        case 'csv':
            exportCSV();
            break;
        case 'pdf':
            exportPDF();
            break;
    }
}

// Export as BibTeX
function exportBibTeX() {
    let bibtex = '';
    
    publicationsData.forEach(pub => {
        const entryType = getBibTeXEntryType(pub.type);
        const citationKey = `afolabi${pub.year}${pub.id}`;
        
        bibtex += `@${entryType}{${citationKey},\n`;
        bibtex += `  title = {${pub.title}},\n`;
        bibtex += `  author = {${pub.authors}},\n`;
        bibtex += `  journal = {${pub.journal}},\n`;
        bibtex += `  year = {${pub.year}},\n`;
        
        if (pub.volume) bibtex += `  volume = {${pub.volume}},\n`;
        if (pub.issue) bibtex += `  number = {${pub.issue}},\n`;
        if (pub.pages) bibtex += `  pages = {${pub.pages}},\n`;
        if (pub.doi) bibtex += `  doi = {${pub.doi}},\n`;
        
        bibtex = bibtex.slice(0, -2); // Remove trailing comma and newline
        bibtex += '\n}\n\n';
    });
    
    downloadFile(bibtex, 'publications.bib', 'text/x-bibtex');
}

// Get BibTeX entry type
function getBibTeXEntryType(type) {
    const types = {
        'journal': 'article',
        'conference': 'inproceedings',
        'chapter': 'incollection',
        'review': 'article'
    };
    return types[type] || 'misc';
}

// Export as RIS
function exportRIS() {
    let ris = '';
    
    publicationsData.forEach(pub => {
        ris += `TY  - ${getRISEntryType(pub.type)}\n`;
        ris += `TI  - ${pub.title}\n`;
        ris += `AU  - ${pub.authors}\n`;
        ris += `JO  - ${pub.journal}\n`;
        ris += `PY  - ${pub.year}\n`;
        
        if (pub.volume) ris += `VL  - ${pub.volume}\n`;
        if (pub.issue) ris += `IS  - ${pub.issue}\n`;
        if (pub.pages) ris += `SP  - ${pub.pages}\n`;
        if (pub.doi) ris += `DO  - ${pub.doi}\n`;
        if (pub.abstract) ris += `AB  - ${pub.abstract.substring(0, 500)}\n`;
        
        ris += `ER  - \n\n`;
    });
    
    downloadFile(ris, 'publications.ris', 'application/x-research-info-systems');
}

// Get RIS entry type
function getRISEntryType(type) {
    const types = {
        'journal': 'JOUR',
        'conference': 'CONF',
        'chapter': 'CHAP',
        'review': 'JOUR'
    };
    return types[type] || 'GEN';
}

// Export as CSV
function exportCSV() {
    let csv = 'Year,Type,Journal,Title,Authors,Citations,DOI\n';
    
    publicationsData.forEach(pub => {
        const row = [
            pub.year,
            getPublicationType(pub.type),
            `"${pub.journal.replace(/"/g, '""')}"`,
            `"${pub.title.replace(/"/g, '""')}"`,
            `"${pub.authors.replace(/"/g, '""')}"`,
            pub.citations,
            pub.doi
        ].join(',');
        
        csv += row + '\n';
    });
    
    downloadFile(csv, 'publications.csv', 'text/csv');
}

// Export as PDF (simulated)
function exportPDF() {
    alert('PDF export functionality would generate a formatted PDF document with all publications. This requires server-side processing.');
    // In a real implementation, this would call a server-side endpoint
    // window.open('/api/export/pdf', '_blank');
}

// Download file utility
function downloadFile(content, filename, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Debounce utility function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}