<script>
  import JSConfetti from 'js-confetti'
  export default {
    data() {
      return {
        name: '',
        counter: 0,
        jsConfetti: new JSConfetti(),
        taskList: [],
        currentTask: {
          name:'',
          id:this.id
        }
      }
    },

    computed: {
      outputFullNameComputed() {
        console.log('Computed');
        if (this.name === '') {
          return ''
        }
        return `${this.name} Maes`
      },

      addConfetti() {
        if (this.counter > 6) {
          this.jsConfetti.addConfetti();
          return "Doel bereikt";
        }
      },
    },

    methods: {
      outputFullName() {
        console.log('Methode');
        if (this.name === '') {
          return ''
        }
        return `${this.name} Maes`
      },
      
      addOne() {
        this.counter += 1
      },

      addTask() {
        let newTask = {
          name:this.currentTask.name,
          id:this.currentTask.id
        }  
        this.taskList.push(newTask);
        this.id++;
      },

      removeTask(index) {
        this.taskList.splice(index, this.id);
      },

      taskEmptyOrNot() {
        if (this.taskList == "") {
          return "Alle taken werden uitgevoerd"
        } else {
          return "Er zijn nieuwe taken beschikbaar"
        }
      },
    }
  }
</script>

<template>
  <div class="container">
    <div class="form__field">
      <label for="firstName">Voornaam:</label>
      <input type="text" id="firstName" v-model="name">
    </div>
    <div class="result">
      <h3>Volledige naam met methode</h3>
      <p>{{ outputFullName() }}</p>
    </div>
    <div class="result">
      <h3>Volledige naam met computed property</h3>
      <p>{{ outputFullNameComputed }}</p>
    </div>
    <div class="result">
      <h3>Voornaam</h3>
      <p>{{ name }}</p>
    </div>
    <div class="result">
      <h3>Teller</h3>
      <p>{{ counter }}</p>
      <button @click="addOne()">Tel 1 bij</button>
      <p>{{ addConfetti }}</p>
    </div>
    <div class="result">
      <ul>
        <li @click="removeItem(index)" v-for="(task, index) in taskList" :key="task.id">
          <p> {{ index }} {{ task.name }}</p>
        </li>
      </ul>
      <input type="text" v-model="currentTask.name">
      <button class="button_padding" v-on:click="addTask()">Add Task</button>
      <p>{{ taskEmptyOrNot() }}</p>
    </div>
  </div>
</template>

<style>
.container {
  width: 75%;
  margin: auto;
  padding-bottom: 5rem;
}
.form__field {
  display: flex;
  flex-direction: column;
}

.form__field input {
  width: 25%;
}

.result {
  width: 50%;
  border: 1px solid #0F0F0F;
  border-radius: 5px;
  margin: 2rem auto;
  padding: 1rem;
}

.button_padding {
  padding: 5px;
  margin: 10px;
}
</style>
