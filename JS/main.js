console.log("connection successful");
let username = "";
let password = ""; 

document.getElementById("loginBtn").addEventListener("click",storeValues);

function storeValues(e){
    let user = document.getElementById("user");
    console.log("username: "+username);

    let check = "check";

    if(user.value.length <= 0){
        console.log("Less than 0");
        username = "";
        user.classList.add("invalid");
        check = false;

    }else {
        username = user.value;
        user.classList.remove("invalid");
        console.log("username is "+username);
    }

    let pass = document.getElementById("password");
    if(pass.value.length <= 0){
        console.log("Less than 0");
        password = "";
        pass.classList.add("invalid");
        check = false;

    }else {
        password = pass.value;
        pass.classList.remove("invalid");
        console.log("password is "+password);
    }


    if(check == "check") {
        console.log("both valid");
        $('#login').modal('hide');
        if(localStorage.usersShell) {
            localStorage.usersShell = username;     
        }else {
            
            localStorage.setItem("userShell", username);
            
            let userLogin = new Event("userLogin", sortingQuiz(e));
            document.dispatchEvent(userLogin);

        }
        
        

    }
    

}

function sortingQuiz(e){
    console.log("sorting quiz active");
    getList();
    
    // store modal
    
    
    // ask questions for user account
    //let quizForm = document.getElementById("quizForm").innerHTML = '<fieldset class="form-group"><div class="form-group"><label class="form-control-label sr-only" for="bio">User Biography</label><h3>User Biography</h3><textarea class="form-control" id="bio" aria-describedby="userBio" required></textarea></div><fieldset><button class="btn align-self-center" type="submit" style="width: 90%" id="sortBtn1">Next</button>';

    // store in webstorage
    //document.getElementById("sortBtn1").addEventListener("onClick",function(e) {
        
        //localStorage.setItem("bio", document.getElementById("bio").value);
    //});

    
    

    
    
    
}


function currentUser() {
    console.log("change colors");
}

function getList() {
let url = 'https://extendsclass.com/api/json-storage/bin/fdcdcaa';

fetch(url)
.then(res => res.json())
.then((questions) => {
    populateQuestions(questions);
});


}


function populateQuestions(list) {
    let qList = JSON.parse(JSON.stringify(list));
    console.log(list);
    console.log(list.randomQuestions);
    console.log(list.randomQuestions[0].question);

    let transferredarray = list.randomQuestions;
    let quizForm = document.getElementById("quizForm");
    
    for(let q=0; q<transferredarray.length; q++){
        let question = transferredarray[q].question;
        

        let answers = [];
        let answersPoints = [];

        for(let a=0; a<transferredarray[q].answers.length; a++) {
            answers.push(transferredarray[q].answers[a]);
            answersPoints.push(transferredarray[q].answerValues[a]);
        }

        


    }
    
    

    
    
    
}



