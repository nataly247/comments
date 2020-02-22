document.getElementById("addCommentBtn").addEventListener("click", function() {
    const name = document.querySelector(".name");
    const comment = document.querySelector(".new-comment");
    const userName = name.value;
    const newComment = comment.value;
    const today = new Date();
    const month = ["January", "Fabruary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const commentDate = month[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear();
    if (userName, commentDate, newComment) {
        addComment(userName, commentDate, newComment);
    } else {
        if (userName == "") {
            alert("Enter your name!");
        }
        if (!newComment) {
            alert("Enter comment!");
        }
    }
    userName.value = "";
    commentDate.value = "";
    newComment.value = "";
    document.querySelector(".name").placeholder = "Name";
    document.querySelector(".new-comment").placeholder = "Add Public Comment";
});

const date = document.querySelector(".date");
const newCommentHere = document.getElementById("addNewCommentHere");


function addComment(name, date, comment) {
    const text = `<div class="userComment"><div class="user"> ${name} <span class="Date"> ${date}</span><span class="edit">edit&#9094;</span><span class="delete">delete&#8999;</span></div>
    <div class="comment"> ${comment}</div></div>`;
    const commentPosition = "beforebegin";
    console.log(text);
    newCommentHere.insertAdjacentHTML(commentPosition, text); //afterbegin
}