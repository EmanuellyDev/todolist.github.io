document.getElementById("task-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Impede o envio do formulário
  
    // Obtém o valor do input
    var taskInput = document.getElementById("task-input");
    var taskValue = taskInput.value;
  
    if (taskValue !== "") {
      // Verifica se a tarefa já existe
      var taskList = document.getElementById("task-list");
      var tasks = taskList.getElementsByTagName("li");
  
      for (var i = 0; i < tasks.length; i++) {
        var taskText = tasks[i].querySelector(".task-text").innerText;
        if (taskText === taskValue) {
          alert("Essa tarefa já existe!");
          taskInput.value = ""; // Limpa o valor do input
          return; // Retorna sem adicionar a tarefa repetida
        }
      }
  
      // Cria um novo item da lista
      var li = document.createElement("li");
      var taskText = document.createElement("span");
      taskText.innerText = taskValue;
      taskText.classList.add("task-text"); // Adiciona uma classe para estilização do texto
  
      // Cria um botão para concluir a tarefa
      var completeButton = document.createElement("button");
      completeButton.innerText = "Concluído";
      completeButton.addEventListener("click", function() {
        taskText.classList.toggle("completed");
      });
  
      // Cria um botão para remover a tarefa
      var removeButton = document.createElement("button");
      removeButton.innerText = "Remover";
      removeButton.addEventListener("click", function() {
        li.remove();
      });
  
      // Cria uma div para agrupar os botões
      var buttonsContainer = document.createElement("div");
      buttonsContainer.classList.add("task-buttons");
  
      // Adiciona os botões à div de agrupamento
      buttonsContainer.appendChild(completeButton);
      buttonsContainer.appendChild(removeButton);
  
      // Adiciona o texto e a div de botões ao item da lista
      li.appendChild(taskText);
      li.appendChild(buttonsContainer);
  
      // Adiciona o item da lista à lista de tarefas
      taskList.appendChild(li);
  
      // Limpa o valor do input
      taskInput.value = "";
    }
  });  