const projects = [
    {
        id: 1,  
        name: 'Hogwarts House Sorting using Stacked LSTM',
        date: new Date('2024-04-30'),
        image:'assets/img/hp_house_sorting.png',
        description: 'Sorting Harry Potter characters into their houses based on dialogue from the movies.',
        accomplishments: ['Trained a stacked LSTM model on Harry Potter dialogue to sort characters by house (Gryffindor, Ravenclaw, Hufflepuff, Slytherin)',
                        ' The model worked well on Harry Potter characters, and was tested on Star Wars characters as well'],
        code: 'https://colab.research.google.com/drive/1veOoI9P_GdTnFWzou34HdYCI5bypg9lY?usp=sharing',
        video: 'https://youtu.be/BlvXQmKTtgo'
    }, 
    {
        id: 2,  
        name: 'Random Project 1',
        date: new Date('2023-01-20'),
        image: '/assets/img/google.jpeg',
        description: 'Random project to show sorting',
        accomplishments: ['Accomplishment 1',
                        'Accomplishment 2'], 
        code: 'https://github.com/sandhig',
        video: 'https://www.youtube.com'
    },
    {
        id: 3,  
        name: 'Random Project 2',
        date: new Date('2022-08-2014'),
        image: '/assets/img/google.jpeg',
        description: 'Another random project to show sorting',
        accomplishments: ['Accomplishment 1',
                        'Accomplishment 2'], 
        code: 'https://github.com/sandhig',
        video: 'https://www.youtube.com'
    }
];

function sortProjects(projects){
    projects.sort((a,b) => b.date - a.date)
    return projects; 
}; 

function renderProject(projects){
    sorted = sortProjects(projects); 

    latestProject = sorted[0]; 

    document.getElementById("latestProject").innerHTML = `
    <div class="col s12 m10">
        <div class="card medium">
            <div class="card-image waves-effect waves-block waves-light">
                <img alt="project_image" src="${latestProject.image}" class="activator" />
            </div>
            <div class="card-content">
                <span class="card-title activator teal-text hoverline">${latestProject.name}<i
                    class="mdi-navigation-more-vert right"></i></span>
                <p>
                    ${latestProject.description}
                </p>
            </div>
            <div class="card-reveal">
            <span class="card-title grey-text"><small>Accomplishments</small><i
                class="mdi-navigation-close right"></i></span>
            <ul>
                ${latestProject.accomplishments.map(acc => `<li>${acc}</li>`).join('')}
            </ul>
            <div class="card-action">
                <a aria-label="View the code for this project" href="${latestProject.code}" target="_blank" data-position="top"
                data-tooltip="View Code"
                class="btn-floating btn-large waves-effect waves-light teal tooltipped"><i
                    class="fa fa-external-link"></i></a>
                <a aria-label="Watch the video about this project" href="${latestProject.video}"
                target="_blank" data-position="top" data-tooltip="View Video"
                class="btn-floating btn-large waves-effect waves-light teal tooltipped"><i
                    class="fa fa-video-camera"></i></a>
            </div>
            </div>
        </div>
    </div>`
}

function loadMoreProjects(){
    // loop through the projects array and render each project
    for (var i=1; i<projects.length; i++){
        document.getElementById("projects").innerHTML += `
            <div class="card medium">
            <div class="card-image waves-effect waves-block waves-light">
            <img alt="project_image" src="${projects[i].image}" class="activator" />
            </div>
            <div class="card-content">
            <span class="card-title activator teal-text hoverline">${projects[i].name}<i
                class="mdi-navigation-more-vert right"></i></span>
            <p>
                ${projects[i].description}
            </p>
            </div>
            <div class="card-reveal">
            <span class="card-title grey-text"><small>Accomplishments</small><i
                class="mdi-navigation-close right"></i></span>
            <ul>
                ${projects[i].accomplishments.map(acc => `<li>${acc}</li>`).join('')}
            </ul>
            <div class="card-action">
                <a aria-label="View the code for this project" href="${projects[i].code}" target="_blank" data-position="top"
                data-tooltip="View Code"
                class="btn-floating btn-large waves-effect waves-light teal tooltipped"><i
                    class="fa fa-external-link"></i></a>
                <a aria-label="Watch the video about this project" href="${projects[i].video}"
                target="_blank" data-position="top" data-tooltip="View Video"
                class="btn-floating btn-large waves-effect waves-light teal tooltipped"><i
                    class="fa fa-video-camera"></i></a>
            </div>
            </div>
        </div>`
    };
    document.getElementById("LoadMore").style.display = "none"
}

renderProject(projects);