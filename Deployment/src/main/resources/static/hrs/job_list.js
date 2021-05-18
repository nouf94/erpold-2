//plain javscript ==================================
     //grab the things we need
     const signupForm = document.getElementById('signup-form');

    //listen for the submit event
     signupForm.addEventListener('submit', processSignupForm);
     function processSignupForm(e) {
     e.preventDefault();

    }

   

    // vue ==========================================
    var app = new Vue({
      el: '#signup-form',
      data: {
    	  allJob:null,
        errors: {
          name: false,
          email: false
        }
      },
      mounted () {
    	    axios
    	      .get('/rest/readJobList')
            .then(response => (
              this.allJob = response.data,
              console.log(response.data)))
            
    	  }
    });