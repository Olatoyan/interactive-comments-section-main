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
    <p class="number">0</p>
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

  // const commentBox = document.querySelectorAll(".comment__box");

  // // commentBox.insertAdjacentHTML("afterend", html);
  // commentBox.forEach((comment) => comment.insertAdjacentHTML("afterend", html));
  const replyBox = document.querySelector(".reply__input-box");
  const replys = replyBox.previousElementSibling;

  replys.insertAdjacentHTML("afterend", html);
  const deleteBox = document.querySelectorAll(".delete__box");

  deleteBox.forEach((del) => {
    del.addEventListener("click", function (e) {
      console.log("de");
      deleteContainer.style.display = "flex";
      overlay.style.display = "block";
      const container = del.closest(".reply__box");
      console.log(container);

      const deleteContainerListener = function (e) {
        if (e.target.closest(".no-box")) {
          deleteContainer.style.display = "none";
          overlay.style.display = "none";
        } else if (e.target.closest(".yes-box")) {
          container.remove();
          deleteContainer.style.display = "none";
          overlay.style.display = "none";
        }
      };

      deleteContainer.addEventListener("click", deleteContainerListener);
    });
  });

  // const deleteBox = document.querySelectorAll(".delete__box");
  // deleteBox.forEach((del) => {
  //   const replyB = del.closest(".reply__box");

  //   del.addEventListener("click", function (e) {
  //     console.log("de");
  //     deleteContainer.style.display = "flex";
  //     overlay.style.display = "block";
  //   });

  //   deleteContainer.addEventListener("click", function (e) {
  //     if (e.target.closest(".no-box")) {
  //       deleteContainer.style.display = "none";
  //       overlay.style.display = "none";
  //     } else if (e.target.closest(".yes-box")) {
  //       const container = del.closest(".reply__box");
  //       container.remove();
  //       deleteContainer.style.display = "none";
  //       overlay.style.display = "none";
  //     }
  //   });
  // });
  // deleteBox.forEach((del) => {
  //   del.addEventListener("click", function (e) {
  //     console.log("de");
  //     deleteContainer.style.display = "flex";
  //     overlay.style.display = "block";
  //   });

  //   deleteContainer.addEventListener("click", function (e) {
  //     if (e.target.closest(".no-box")) {
  //       deleteContainer.style.display = "none";
  //       overlay.style.display = "none";
  //     } else if (e.target.closest(".yes-box")) {
  //       const container = del.closest(".reply__box");
  //       container.remove();
  //       deleteContainer.style.display = "none";
  //       overlay.style.display = "none";
  //     }
  //   });
  // });
};

const page = async function () {
  const res = await fetch("data.json");
  const data = await res.json();
  console.log(data);

  renderComment(data.comments[0]);
  renderComment(data.comments[1]);
  renderReply(data.comments[1].replies[0]);
  renderUserReply(data.comments[1].replies[1]);
  // const replyComment = document.querySelectorAll(".reply__text__box");
  // let activeReplyBox = null;
  const replyComment = document.querySelectorAll(".reply__text__box");
  console.log(replyComment);
  let activeReplyBox = null;

  const handleReplySend = function (e) {
    if (e.target.closest(".send")) {
      const replyInput = document.querySelector(".reply__input");
      const replyBox = document.querySelector(".reply__input-box");

      // const userName = reply.querySelector(".user__name").textContent;
      console.log(replyInput.value);
      renderYou(replyInput.value);
      // replyInput.value = `@${userName}`;
      replyBox.style.display = "none";
      // activezzzz.style.display = "none";
      activeReplyBox = null;
      // replyBox.removeEventListener("click", handleReplySend); // Remove the event listener after sending the reply
    }
  };

  replyComment.forEach((reply) => {
    reply.addEventListener("click", function (e) {
      // writingSection.style.display = "flex";
      const replyBox = document.querySelector(".reply__input-box");
      const replys = reply.closest(".box");
      activeReplyBox = replyBox;

      replyBox.style.display = "flex";
      const replyInput = document.querySelector(".reply__input");
      console.log(replys);
      replys.insertAdjacentElement("afterend", replyBox);
      const userName = replys.querySelector(".user__name").textContent;
      replyInput.textContent = `@${userName}`;
      replyInput.value = `@${userName}`;
      console.log(replyBox);

      replyBox.removeEventListener("click", handleReplySend);

      replyBox.addEventListener("click", handleReplySend);

      /////////////////////////
      writingSection.addEventListener("click", function (e) {
        console.log(e.target);

        if (e.target.closest(".send")) {
          console.log(inputText.value);
        }
      });
    });
  });

  // const replyComment = document.querySelectorAll(".reply__text__box");
  // let activeReplyBox = null;

  // const handleReplySend = function (e) {
  //   if (e.target.closest(".send")) {
  //     const replyInput = document.querySelector(".reply__input");
  //     const userName = activeReplyBox.querySelector(".user__name").textContent;
  //     console.log(replyInput.value);
  //     renderYou(replyInput.value);
  //     replyInput.value = `@${userName}`;
  //     // replyInput.style.display = "none";

  //     activeReplyBox = null;
  //     // replyBox.removeEventListener("click", handleReplySend); // Remove the event listener after sending the reply
  //   }
  // };

  // replyComment.forEach((reply) => {
  //   reply.addEventListener("click", function (e) {
  //     const replys = reply.closest(".box");
  //     const userName = replys.querySelector(".user__name").textContent;

  //     if (activeReplyBox !== null && activeReplyBox !== replys) {
  //       activeReplyBox.style.display = "none";
  //       activeReplyBox = null;
  //     }

  //     if (activeReplyBox !== replys) {
  //       const replyBox = document.querySelector(".reply__input-box");
  //       activeReplyBox = replys;
  //       replyBox.style.display = "flex";
  //       const replyInput = document.querySelector(".reply__input");
  //       replys.insertAdjacentElement("afterend", replyBox);
  //       replyInput.textContent = `@${userName}`;

  //       replyBox.removeEventListener("click", handleReplySend); // Remove previous event listener, if any
  //       replyBox.addEventListener("click", handleReplySend);
  //     }
  //   });
  // });

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
      const container = del.closest(".reply__box");
      console.log(container);

      const deleteContainerListener = function (e) {
        if (e.target.closest(".no-box")) {
          deleteContainer.style.display = "none";
          overlay.style.display = "none";
        } else if (e.target.closest(".yes-box")) {
          container.remove();
          deleteContainer.style.display = "none";
          overlay.style.display = "none";
        }
      };

      deleteContainer.addEventListener("click", deleteContainerListener);
    });
  });

  // const deleteBox = document.querySelectorAll(".delete__box");
  // // console.log(deleteBox);
  // deleteBox.forEach((del) => {
  //   del.addEventListener("click", function (e) {
  //     console.log("de");
  //     deleteContainer.style.display = "flex";
  //     overlay.style.display = "block";
  //     const container = del.closest(".reply__box");
  //     console.log(container);

  //     deleteContainer.addEventListener("click", function (e) {
  //       if (e.target.closest(".no-box")) {
  //         deleteContainer.style.display = "none";
  //         overlay.style.display = "none";
  //       } else if (e.target.closest(".yes-box")) {
  //         container.remove();
  //         deleteContainer.style.display = "none";
  //         overlay.style.display = "none";
  //       }
  //     });
  //   });
  // });
  // deleteBox.forEach((del) => {
  //   del.addEventListener("click", function (e) {
  //     console.log("de");
  //     deleteContainer.style.display = "flex";
  //     overlay.style.display = "block";
  //   });

  //   deleteContainer.addEventListener("click", function (e) {
  //     if (e.target.closest(".no-box")) {
  //       deleteContainer.style.display = "none";
  //       overlay.style.display = "none";
  //     } else if (e.target.closest(".yes-box")) {
  //       const container = del.closest(".reply__box");
  //       container.remove();
  //       deleteContainer.style.display = "none";
  //       overlay.style.display = "none";
  //     }
  //   });
  // });
};
page();

numberBox;
console.log(numberBox);
// console.log(replyComment);
