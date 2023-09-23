<template>
  <div>
    <div id="title">
      <h1>About Me</h1>
      <p>Welcome to my portfolio page showcasing a little bit about me.</p>
    </div>

    <div id="app" class="container">
      <div class="column" v-for="(project, index) in projects" :key="index">
        <h2>{{ project.name }}</h2>
        <button @click="viewProject(index)">View</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      projects: [
        {
          name: 'Who Am I?',
          description: 'My name is Michael and I am 25 years old.\n' +
            'I live in Melbourne and have three dogs named Pepsi, Macy, and Hank.\n' +
            'I\'m currently studying a Bachelor of Information Technology at Deakin university.\n' +
            'I currently work as a Subject Matter Expert on an IT project, where I support business analysts, product owners, software developers and testing teams create an implement software enhancements to better suit the needs of the business'
        },
        {
          name: 'My Skills',
          description: 'I have very developed communication and interpersonal skills.\n' +
            'I am very flexible with working and studying arrangements.\n' +
            'I speak English, Italian, and Spanish fluently.\n' +
            'I am eager to continue learning'
        },
        {
          name: 'My Aspirations',
          description: 'I aspire to live and work in multiple different countries around the world like Spain, Germany, and the United States.\n' +
            'I wish to become a software developer, which is why I chose to major in Application Development.\n' +
            'I would like to have experience in many different technology roles, such as software development, testing, and systems analysis'
        }
      ]
    }
  },
  methods: {
    viewProject (index) {
      alert(`${this.projects[index].description}.`)
    }
  }
}
</script>

<style scoped>
@import '../assets/styles.css';
</style>
