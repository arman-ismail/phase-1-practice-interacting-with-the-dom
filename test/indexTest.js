// The code below ensures that students who are using CodeGrade will get credit
// for the code-along in Canvas; you can disregard it.

require("./helpers.js");

describe("", () => {
  describe("", () => {
    it("Test passing", () => {
      return true;
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  let counter = document.getElementById("counter");
  let count = 0;
  let intervalId = setInterval(incrementCounter, 1000);
  
  const incrementCounter = () => {
    count++;
    counter.innerText = count;
  };

  const startCounter = () => {
    intervalId = setInterval(incrementCounter, 1000);
  };

  const stopCounter = () => {
    clearInterval(intervalId);
  };

  document.getElementById("plus").addEventListener("click", () => {
    count++;
    counter.innerText = count;
  });

  document.getElementById("minus").addEventListener("click", () => {
    count--;
    counter.innerText = count;
  });

  document.getElementById("heart").addEventListener("click", () => {
    let likes = document.querySelector(`.likes li[data-num="${count}"]`);
    if (likes) {
      let currentLikes = parseInt(likes.children[0].innerText);
      likes.children[0].innerText = currentLikes + 1;
    } else {
      let newLike = document.createElement("li");
      newLike.dataset.num = count;
      newLike.innerHTML = `${count} has been liked <span>1</span> time`;
      document.querySelector(".likes").appendChild(newLike);
    }
  });

  document.getElementById("pause").addEventListener("click", (e) => {
    if (e.target.innerText === "pause") {
      stopCounter();
      e.target.innerText = "resume";
      document.getElementById("plus").disabled = true;
      document.getElementById("minus").disabled = true;
      document.getElementById("heart").disabled = true;
    } else {
      startCounter();
      e.target.innerText = "pause";
      document.getElementById("plus").disabled = false;
      document.getElementById("minus").disabled = false;
      document.getElementById("heart").disabled = false;
    }
  });

  document.getElementById("comment-form").addEventListener("submit", (e) => {
    e.preventDefault();
    let comment = document.getElementById("comment-input").value;
    let newComment = document.createElement("li");
    newComment.innerText = comment;
    document.getElementById("comments").appendChild(newComment);
    e.target.reset();
  });
});
