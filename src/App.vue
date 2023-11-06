<script>
  import JSConfetti from 'js-confetti'
  import taskComponent from '@/components/taskComponent.vue'
  export default {
    data() {
      return {
        name: '',
        counter: 0,
        jsConfetti: new JSConfetti(),
        taskList: [],
        currentTask: {
          name:'',
          id:this.id,
          label:'',
          priority: ''
        },
      };
    },
    components: {
      taskComponent
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
          id:this.currentTask.id,
          priority:this.currentTask.priority,
          label:this.currentTask.label
        }  
        this.taskList.push(newTask);
        this.name = "";
        this.label = "";
        this.priority = "";
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
    <div class="result">
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
      <button class="button__padding" @click="addOne()">Tel 1 bij</button>
      <p>{{ addConfetti }}</p>
    </div>

    <div class="result">
      <ul>
        <taskComponent v-for="(task, index) in taskList" :key="task.id"
        v-bind:task="task"
        v-bind:index="index"
        />
      </ul>
      <input type="text" v-model="currentTask.name">
      <input type="text" v-model="currentTask.label">
      <input type="text" v-model="currentTask.priority">
      <button class="button__padding" v-on:click="addTask()">Add Task</button>
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

.button__padding {
  padding: 5px;
  margin: 10px;
}

li {
  list-style: none;
}

input {
  margin-right: 15px;
}
</style>
