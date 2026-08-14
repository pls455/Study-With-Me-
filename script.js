document.addEventListener('DOMContentLoaded', init);

let globalData = {};
let allFiles = [];

async function init() {
    try {
        const response = await fetch('content.json');
        if (!response.ok) throw new Error('فشل تحميل البيانات');
        globalData = await response.json();
        allFiles = globalData.files || [];
        
        populateSubjectFilter();
        loadSavedPreferences();
        renderFiles(allFiles);
        renderTeamsHelp();
        renderDirectorates();
        renderImportantLinks();
        setupEventListeners();
    } catch (error) {
        console.error("Error loading data:", error);
        document.getElementById('filesContainer').innerHTML = `<div class="empty-state"><i class="fa-solid fa-triangle-exclamation"></i><p>حدث خطأ أثناء تحميل البيانات. تأكد من وجود ملف content.json</p></div>`;
    }
}

function setupEventListeners() {
    document.getElementById('searchInput').addEventListener('input', filterContent);
    document.getElementById('branchFilter').addEventListener('change', (e) => {
        savePreference('selectedBranch', e.target.value);
        filterContent();
    });
    document.getElementById('subjectFilter').addEventListener('change', filterContent);
    document.getElementById('typeFilter').addEventListener('change', filterContent);
}

function loadSavedPreferences() {
    const savedBranch = localStorage.getItem('studyWithMe_selectedBranch');
    if (savedBranch) {
        document.getElementById('branchFilter').value = savedBranch;
    }
}

function savePreference(key, value) {
    localStorage.setItem(`studyWithMe_${key}`, value);
    showToast(`تم حفظ اختيارك: ${value}`);
}

function populateSubjectFilter() {
    const subjects = [...new Set(allFiles.map(file => file.subject))].filter(s => s);
    const subjectSelect = document.getElementById('subjectFilter');
    subjects.forEach(subject => {
        const option = document.createElement('option');
        option.value = subject;
        option.textContent = subject;
        subjectSelect.appendChild(option);
    });
}

function filterContent() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase().trim();
    const branchFilter = document.getElementById('branchFilter').value;
    const subjectFilter = document.getElementById('subjectFilter').value;
    const typeFilter = document.getElementById('typeFilter').value;

    const filteredFiles = allFiles.filter(file => {
        const matchesSearch = file.title.toLowerCase().includes(searchQuery) || 
                              (file.teacher && file.teacher.toLowerCase().includes(searchQuery)) ||
                              file.subject.toLowerCase().includes(searchQuery);
        const matchesBranch = branchFilter === 'all' || file.branch === branchFilter || file.branch === 'مشترك';
        const matchesSubject = subjectFilter === 'all' || file.subject === subjectFilter;
        
        let matchesType = true;
        if(typeFilter === 'كتاب') matchesType = file.type.includes('كتاب') || file.type.includes('حلول');
        else if(typeFilter === 'دوسية') matchesType = file.type.includes('دوسية') || file.type.includes('ملخص');
        else if(typeFilter === 'امتحان') matchesType = file.type.includes('امتحان') || file.type.includes('وزاري') || file.type.includes('تجريبي');
        else if(typeFilter === 'تأسيس') matchesType = file.type.includes('تأسيس');

        return matchesSearch && matchesBranch && matchesSubject && matchesType;
    });

    renderFiles(filteredFiles);
}

function renderFiles(files) {
    const container = document.getElementById('filesContainer');
    const emptyState = document.getElementById('emptyState');
    const resultsCount = document.getElementById('resultsCount');
    
    container.innerHTML = '';
    resultsCount.textContent = `النتائج: ${files.length} ملف`;

    if (files.length === 0) {
        container.classList.add('hidden');
        emptyState.classList.remove('hidden');
        return;
    }

    container.classList.remove('hidden');
    emptyState.classList.add('hidden');

    files.forEach(file => {
        const card = document.createElement('div');
        card.className = 'file-card';
        
        let urlAttr = file.url && file.url !== "#" ? `href="${file.url}" target="_blank" rel="noopener noreferrer"` : `href="#" onclick="alert('الرابط غير متوفر حالياً'); return false;"`;
        
        card.innerHTML = `
            <div class="card-badges">
                <span class="badge branch">${file.branch}</span>
                <span class="badge subject">${file.subject}</span>
                <span class="badge">${file.type}</span>
            </div>
            <h4 class="card-title">${file.title}</h4>
            ${file.teacher ? `<p class="card-teacher"><i class="fa-solid fa-user-tie"></i> ${file.teacher}</p>` : '<p class="card-teacher"></p>'}
            <div class="card-actions">
                <a ${urlAttr} class="btn btn-primary"><i class="fa-solid fa-external-link-alt"></i> فتح الملف</a>
            </div>
        `;
        container.appendChild(card);
    });
}

function renderTeamsHelp() {
    const container = document.getElementById('teamsContainer');
    if(!globalData.teamsHelp) return;
    
    globalData.teamsHelp.forEach((item, index) => {
        const el = document.createElement('div');
        el.className = 'accordion-item';
        el.innerHTML = `
            <div class="accordion-header" onclick="this.parentElement.classList.toggle('active')">
                <span>${index + 1}. ${item.title}</span>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div class="accordion-body">${item.content}</div>
        `;
        container.appendChild(el);
    });
}

function renderDirectorates() {
    const container = document.getElementById('directoratesContainer');
    if(!globalData.directorates) return;
    
    globalData.directorates.forEach(dir => {
        const card = document.createElement('div');
        card.className = 'dir-card';
        card.innerHTML = `
            <h4>${dir.name}</h4>
            <p><i class="fa-solid fa-phone"></i> ${dir.phones.join(' / ')}</p>
            <p><i class="fa-solid fa-location-dot"></i> ${dir.location}</p>
        `;
        container.appendChild(card);
    });
}

function renderImportantLinks() {
    const container = document.getElementById('linksContainer');
    if(!globalData.importantLinks) return;

    globalData.importantLinks.forEach(link => {
        const a = document.createElement('a');
        a.className = 'link-item';
        a.href = link.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.innerHTML = `<i class="${link.icon || 'fa-solid fa-link'}"></i> <span>${link.title}</span>`;
        container.appendChild(a);
    });
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}
