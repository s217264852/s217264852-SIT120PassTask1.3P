<template>
  <div>
    <div id="title">
      <h1>My Past Roles</h1>
      <p>Welcome to my portfolio page showcasing some of the roles I have worked in the past.</p>
    </div>

    <div id="app" class="container">
      <div class="column" v-for="(project, index) in projects" :key="index">
        <h2>{{ project.name }}</h2>
        <button @click="viewProject(index)">View Role Description</button>
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
          name: 'Role 1: Customer Service Trainer',
          description: 'I was responsible in designing and facilitating training for new starters to the company that I previously worked for. Training was facilitated both in person and virtually to Customer Service agents across Australia in Victoria, New South Wales, and Queensland'
        },
        {
          name: 'Role 2: Hardship Advisor',
          description: 'I was responsible for speaking to customer experiencing financial hardship and providing them with support from the company that I previously worked for. I would assess the customers circumstances and offer additional support services'
        },
        {
          name: 'Role 3: Subject Matter Expert for an IT Project',
          description: 'In this role I would provide business knowledge to business analysts, product owners, software development and testing teams to ensure that both system and business requirements are met. My role is critical to ensure that the end users receive a product that meets their needs as well as that of the business'
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
