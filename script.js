"use strict";

const numberBox = document.querySelectorAll(".number__box");
const commentSection = document.querySelector(".comment__section");
const writingSection = document.querySelector(".writing__section");
const inputText = document.querySelector(".input__text");
const deleteContainer = document.querySelector(".delete__container");
const overlay = document.querySelector(".overlay");

// numberBox.forEach((box) => {
//   box.addEventListener("click", function (e) {
//     const previousSibling = e.target.previousElementSibling;
//     const nextSibling = e.target.nextElementSibling;

//     // console.log(e.target);
//     if (e.target.classList.contains("minus__icon")) {
//       // console.log(previousSibling.textContent--);
//       if (previousSibling.textContent === 0) {
//         previousSibling.textContent = 0;
//       } else if (previousSibling.textContent > 0) {
//         previousSibling.textContent--;
//       }
//     } else if (e.target.classList.contains("plus__icon")) {
//       console.log("plus");
//       nextSibling.textContent++;
//     }
//   });
// });

const renderComment = function (data) {
  const html = `
      <div class="comment__box box">
        <div class="number__box">
          <img
            src="images/icon-plus.svg"
            alt="plus icon"
            class="plus__icon"
          />
          <p class="number">${data.score}</p>
          <img
            src="images/icon-minus.svg"
            alt="minus icon"
            class="minus__icon"
          />
        </div>
        <div class="text__box">
          <div class="text__header__box">
            <img
              src="${data.user.image.webp}"
              alt="image-amyrobson"
              class="user__img"
            />
            <p class="user__name">${data.user.username}</p>
            <p class="date__posted">${data.createdAt}</p>
            <div class="reply__text__box">
              <img
                src="images/icon-reply.svg"
                alt="reply img"
                class="reply__img"
              />
              <p class="reply__text">Reply</p>
            </div>
          </div>
          <p class="user__text">
            ${data.content}
          </p>
        </div>
      </div>
      `;

  commentSection.insertAdjacentHTML("beforeend", html);
};

const renderUserReply = function (data) {
  const html = `
          <div class="reply__box box">
            <div class="number__box">
              <img
                src="images/icon-plus.svg"
                alt="plus icon"
                class="plus__icon"
              />
              <p class="number">${data.score}</p>
              <img
                src="images/icon-minus.svg"
                alt="minus icon"
                class="minus__icon"
              />
            </div>
            <div class="text__box">
              <div class="text__header__box">
                <img
                  src="${data.user.image.webp}"
                  alt="image-juliusomo"
                  class="user__img"
                />
                <p class="user__name">${data.user.username}</p>
                <p class="you">you</p>
                <p class="date__posted">${data.createdAt}</p>
                <div class="edit__delete__box">
                  <div class="delete__box">
                    <img
                      src="images/icon-delete.svg"
                      alt="delete img"
                      class="delete__img"
                    />
                    <p class="delete__text">Delete</p>
                  </div>
                  <div class="edit__box">
                    <img
                      src="images/icon-edit.svg"
                      alt="edit img"
                      class="edit__img"
                    />
                    <p class="edit__text">Edit</p>
                  </div>
                </div>
              </div>
              <p class="user__text">
              <span class="replied__to">@${data.replyingTo}</span>
                ${data.content}
              </p>
            </div>
          </div>
  `;
  commentSection.insertAdjacentHTML("beforeend", html);
};
const renderReply = function (data) {
  const html = `
          <div class="reply__box box">
            <div class="number__box">
              <img
                src="images/icon-plus.svg"
                alt="plus icon"
                class="plus__icon"
              />
              <p class="number">${data.score}</p>
              <img
                src="images/icon-minus.svg"
                alt="minus icon"
                class="minus__icon"
              />
            </div>
            <div class="text__box">
              <div class="text__header__box">
                <img
                  src="${data.user.image.webp}"
                  alt="image-juliusomo"
                  class="user__img"
                />
                <p class="user__name">${data.user.username}</p>
                <p class="date__posted">${data.createdAt}</p>
                <div class="reply__text__box">
              <img
                src="images/icon-reply.svg"
                alt="reply img"
                class="reply__img"
              />
              <p class="reply__text">Reply</p>
            </div>
              </div>
              <p class="user__text">
              <span class="replied__to">@${data.replyingTo}</span>

                ${data.content}
              </p>
            </div>
          </div>
  `;
  commentSection.insertAdjacentHTML("beforeend", html);
};

const renderYou = function (data) {
  const html = `<div class="reply__box">
  <div class="number__box">
    <img
      src="images/icon-plus.svg"
      alt="plus icon"
      class="plus__icon"
    />
    <p class="number">4</p>
    <img
      src="images/icon-minus.svg"
      alt="minus icon"
      class="minus__icon"
    />
  </div>
  <div class="text__box">
    <div class="text__header__box">
      <img
        src="images/avatars/image-juliusomo.webp"
        alt="image-juliusomo"
        class="user__img"
      />
      <p class="user__name">juliusomo</p>
      <p class="you">you</p>
      <p class="date__posted">2 days ago</p>
      <div class="edit__delete__box">
        <div class="delete__box">
          <img
            src="images/icon-delete.svg"
            alt="delete img"
            class="delete__img"
          />
          <p class="delete__text">Delete</p>
        </div>
        <div class="edit__box">
          <img
            src="images/icon-edit.svg"
            alt="edit img"
            class="edit__img"
          />
          <p class="edit__text">Edit</p>
        </div>
      </div>
    </div>
    <p class="user__text">
   ${data}
    </p>
  </div>
</div>`;
  const commentBox = document.querySelector(".comment__box");

  commentBox.insertAdjacentHTML("afterend", html);
  // commentBox.forEach((comment) => comment.insertAdjacentHTML("afterend", html));
};

const page = async function () {
  const res = await fetch("data.json");
  const data = await res.json();
  console.log(data);

  renderComment(data.comments[0]);
  renderComment(data.comments[1]);
  renderReply(data.comments[1].replies[0]);
  renderUserReply(data.comments[1].replies[1]);
  const replyComment = document.querySelectorAll(".reply__text__box");
  const replyBox = document.querySelector(".reply__input-box");
  console.log(replyComment);
  replyComment.forEach((reply) => {
    reply.addEventListener("click", function (e) {
      // writingSection.style.display = "flex";
      const replys = reply.closest(".box");

      replyBox.style.display = "flex";
      const replyInput = document.querySelector(".reply__input");

      replys.insertAdjacentElement("afterend", replyBox);
      const userName = replys.querySelector(".user__name").textContent;
      replyInput.textContent = `@${userName}`;
      console.log(replyBox);
      replyBox.addEventListener("click", function (e) {
        if (e.target.closest(".send")) {
          const replyInput = document.querySelector(".reply__input");

          console.log(replyInput.value);
          renderYou(replyInput.value);
          replyInput.textContent = `@${userName}`;
          replyInput.value = `@${userName}`;
          replyBox.style.display = "none";
        }
      });
      writingSection.addEventListener("click", function (e) {
        console.log(e.target);

        if (e.target.closest(".send")) {
          console.log(inputText.value);
        }
      });
    });
  });

  const numberBox = document.querySelectorAll(".number__box");

  numberBox.forEach((box) => {
    box.addEventListener("click", function (e) {
      const previousSibling = e.target.previousElementSibling;
      const nextSibling = e.target.nextElementSibling;

      // console.log(e.target);
      if (e.target.classList.contains("minus__icon")) {
        // console.log(previousSibling.textContent--);
        if (previousSibling.textContent === 0) {
          previousSibling.textContent = 0;
        } else if (previousSibling.textContent > 0) {
          previousSibling.textContent--;
        }
      } else if (e.target.classList.contains("plus__icon")) {
        console.log("plus");
        nextSibling.textContent++;
      }
    });
  });

  const deleteBox = document.querySelectorAll(".delete__box");

  deleteBox.forEach((del) => {
    del.addEventListener("click", function (e) {
      console.log("de");
      deleteContainer.style.display = "flex";
      overlay.style.display = "block";
    });

    deleteContainer.addEventListener("click", function (e) {
      if (e.target.closest(".no-box")) {
        deleteContainer.style.display = "none";
        overlay.style.display = "none";
      }
    });
  });
};
page();

numberBox;
console.log(numberBox);
// console.log(replyComment);
