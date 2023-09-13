function filterProjects(category){
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        const categories = project.getAttribute('data-categories').split(',');
    
        if (categories.includes(category) || category === 'all') {
        project.style.display = 'block';
        
        } else {
            project.style.display = 'none';
        }
    });
}

document.getElementById('all').addEventListener('click', () => filterProjects('all'));
document.getElementById('web').addEventListener('click', () => filterProjects('web'));
document.getElementById('mobile').addEventListener('click', () => filterProjects('mobile'));
document.getElementById('design').addEventListener('click', () => filterProjects('design'));