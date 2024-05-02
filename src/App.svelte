<!-- src/routes/index.svelte -->
<script>
    let tasks = [];
    let newTask = '';
    let count = 0;

    function addTask() {
        if (newTask.trim() !== '') {
            tasks = [...tasks, { id: tasks.length, text: newTask }];
            newTask = '';
        }
    }

    function removeTask(id) {
        tasks = tasks.filter(task => task.id !== id);
    }

    function increment() {
        count += 1;
    }

    function decrement() {
        count -= 1;
    }
</script>

<style>
    h1 {
        text-align: center;
        margin-bottom: 20px;
		color: red;
    }

    .task-input {
        margin-bottom: 10px;
        padding: 5px;
        width: 200px;
    }

    .task-list {
        list-style-type: none;
        padding-left: 0;
    }

    .task-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px 10px;
        border-bottom: 1px solid #ccc;
    }

    .counter {
        margin-top: 20px;
    }
</style>

<h1>Página Inicial</h1>

<h2>Lista de Tarefas</h2>

<input type="text" bind:value={newTask} placeholder="Adicionar uma nova tarefa" class="task-input" />
<button on:click={addTask}>Adicionar</button>

<ul class="task-list">
    {#each tasks as task}
        <li class="task-item">{task.text} <button on:click={() => removeTask(task.id)}>Remover</button></li>
    {/each}
</ul>

<h2 class="counter">Contador</h2>

<p>Valor atual: {count}</p>

<button on:click={increment}>Incrementar</button>
<button on:click={decrement}>Decrementar</button>
