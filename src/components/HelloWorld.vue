<template>
    <form>
        <div class="form-group">
          <label for="name"> <b>Name</b> </label>
          <input type="text" class="form-control" placeholder="Name" v-model="Users.name">
        </div>
        <div class="form-group">
          <label for="Description"><b> Description</b></label>
          <input type="text" class="form-control" placeholder="Description" v-model="Users.Description">
        </div>
      <button type="submit" class="btn btn-large btn-block btn-primary full-width" @click="addToAPI">Post</button>
  <div id="preview">
      <h3>Preview</h3>
      <p><b>Name:{{Users.name}}</b></p>
      <p><b>Description:{{Users.Description}}</b></p>
      </div>
  </form>
</template>
<script>
/* eslint-disable */
import axios from 'axios';
export default {
  name: 'hello',
  data() {
    return {
     Users: {
        'name': 'lalitha',
        'description': '',
        'description_html': '',
        'details': {
          'address': '',
          'gender': '',
          'mobile': ''
        },
        'is_complete': 'true',
        'priority': 'H',
        'user': '1'
    }
    }
  }, 
  methods: {
    addToAPI() {
      let newUser = {
        name: this.Users.name,
        description: this.Users.description,
        description_html: this.Users.description_html,
        details:this.Users.details,
        is_complete:this.Users.is_complete,
        priority:this.Users.priority,
        user:this.Users.user
      }
      console.log(newUser);
      axios.post('http://checklister-api.herokuapp.com/item/create/ ', newUser)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
}
</script>
<style scoped>
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for all buttons */
button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

button:hover {
  opacity:1;
}
</style>
