
fetch('DataBase/Projects.json')
  .then(response => response.json())
  .then(data => {
    const fruitsList = document.getElementById('project-scroller');
    data.project.forEach(project => {
      const listItem = document.createElement('li');
      listItem.innerHTML = '<div class="project-image" style="background-image: url(' + project.image +')"></div><p class="project-title">'+project.title+'</p><p class="project-tools">'+project.tags+'</p>'
      listItem.setAttribute('class', 'project-container');
	    listItem.setAttribute('id', 'project');
	    

      
      fruitsList.appendChild(listItem);
	  
    });
  });

  