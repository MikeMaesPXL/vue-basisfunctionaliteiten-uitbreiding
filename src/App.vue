<script>
  import JSConfetti from 'js-confetti'
  export default {
    data() {
      return {
        name: '',
        counter: 0,
        jsConfetti: new JSConfetti(),
      }
    },

    computed: {
      outputFullNameComputed() {
        console.log('Computed');
        if (this.name === '') {
          return ''
        }
        return `${this.name} Braibant`
      },
    },

    methods: {
      outputFullName() {
        console.log('Methode');
        if (this.name === '') {
          return ''
        }
        return `${this.name} Braibant`
      },
      
      addOne() {
        this.counter += 1
      }
    }
  }
</script>

<template>
  <div class="container">
    <div class="form__field">
      <label for="firstName">Voornaam:</label>
      <input type="text" id="fistName" v-model="name">
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
</style>
