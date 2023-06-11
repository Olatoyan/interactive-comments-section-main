"use strict";

const numberBox = document.querySelectorAll(".number__box");
const commentSection = document.querySelector(".comment__section");
const writingSection = document.querySelector(".writing__section");
const inputText = document.querySelector(".input__text");
const deleteContainer = document.querySelector(".delete__container");
const overlay = document.querySelector(".overlay");

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
  const timestamp = new Date();
  const timeDifference = Math.floor((Date.now() - timestamp) / 1000);
  let timeText;
  if (timeDifference < 60) {
    timeText = "few seconds ago";
  } else if (timeDifference < 3600) {
    const minutes = Math.floor(timeDifference / 60);
    timeText = `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  } else if (timeDifference < 86400) {
    const hours = Math.floor(timeDifference / 3600);
    timeText = `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  } else {
    const days = Math.floor(timeDifference / 86400);
    timeText = `${days} day${days !== 1 ? "s" : ""} ago`;
  }

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
      <p class="date__posted">${timeText}</p>
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

  const replyBox = document.querySelector(".reply__input-box");
  const replys = replyBox.previousElementSibling;

  replys.insertAdjacentHTML("afterend", html);
  const deleteBox = document.querySelectorAll(".delete__box");

  deleteBox.forEach((del) => {
    del.addEventListener("click", function (e) {
      deleteContainer.style.display = "flex";
      overlay.style.display = "block";
      const container = del.closest(".reply__box");

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
  const replyComment = document.querySelectorAll(".reply__text__box");
  let activeReplyBox = null;
  const editBox = document.querySelectorAll(".edit__box");
  const handleReplySend = function (e) {
    const replyInput = document.querySelector(".reply__input");
    const replyBox = document.querySelector(".reply__input-box");
    const container = activeReplyBox.closest(".reply__box");
    if (container) {
      const editedText = replyInput.value.trim();

      if (editedText !== "") {
        const userText = container.querySelector(".user__text");
        userText.textContent = editedText;
      }

      replyBox.style.display = "none";
      activeReplyBox = null;
    }
  };

  editBox.forEach((edit) => {
    edit.addEventListener("click", function (e) {
      const container = edit.closest(".reply__box");
      const text = container.querySelector(".user__text").textContent.trim();
      container.style.display = "none";

      const replyBox = document.querySelector(".reply__input-box");
      const replyInput = document.querySelector(".reply__input");

      replyBox.style.display = "flex";
      replyInput.value = text;

      activeReplyBox = replyBox;

      replyBox.removeEventListener("click", handleReplySend);
      replyBox.addEventListener("click", handleReplySend);
    });
  });
  const numberBox = document.querySelectorAll(".number__box");

  numberBox.forEach((box) => {
    box.addEventListener("click", function (e) {
      const previousSibling = e.target.previousElementSibling;
      const nextSibling = e.target.nextElementSibling;

      if (e.target.classList.contains("minus__icon")) {
        if (previousSibling.textContent === 0) {
          previousSibling.textContent = 0;
        } else if (previousSibling.textContent > 0) {
          previousSibling.textContent--;
        }
      } else if (e.target.classList.contains("plus__icon")) {
        nextSibling.textContent++;
      }
    });
  });
};
const renderYous = function (data) {
  const timestamp = new Date();
  const timeDifference = Math.floor((Date.now() - timestamp) / 1000);
  let timeText;
  if (timeDifference < 60) {
    timeText = "few seconds ago";
  } else if (timeDifference < 3600) {
    const minutes = Math.floor(timeDifference / 60);
    timeText = `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  } else if (timeDifference < 86400) {
    const hours = Math.floor(timeDifference / 3600);
    timeText = `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  } else {
    const days = Math.floor(timeDifference / 86400);
    timeText = `${days} day${days !== 1 ? "s" : ""} ago`;
  }

  const html = `<div class="comment__box box">
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
      <p class="date__posted">${timeText}</p>
      <div class="edit__delete__box">
        <div class="delete__box">
          <img
            src="images/icon-delete.svg"
            alt="delete img"
            class="delete__img"
          />
          <p class="delete__text">Delete</p>
        </div>
      </div>
    </div>
    <p class="user__text">
   ${data}
    </p>
  </div>
</div>`;

  const replyBox = document.querySelector(".reply__input-box");
  const replys = replyBox.previousElementSibling;

  const writingSection = document.querySelector(".writing__section");

  writingSection.insertAdjacentHTML("beforebegin", html);
  const deleteBox = document.querySelectorAll(".delete__box");

  const replyComment = document.querySelectorAll(".reply__text__box");
  let activeReplyBox = null;
  const editBox = document.querySelectorAll(".edit__box");
  const handleReplySend = function (e) {
    const replyInput = document.querySelector(".reply__input");
    const replyBox = document.querySelector(".reply__input-box");
    const container = activeReplyBox.closest(".reply__box");

    if (container) {
      const editedText = replyInput.value.trim();

      if (editedText !== "") {
        const userText = container.querySelector(".user__text");
        userText.textContent = editedText;
      }

      replyBox.style.display = "none";
      activeReplyBox = null;
      writingSection.style.display = "flex";
    }
  };
  editBox.forEach((edit) => {
    edit.addEventListener("click", function (e) {
      const container = edit.closest(".comment__box");
      const text = container.querySelector(".user__text").textContent.trim();

      const replyBox = document.querySelector(".reply__input-box");
      const replyInput = document.querySelector(".reply__input");
      replyBox.style.display = "flex";
      container.style.display = "none";
      replyInput.value = text;
      writingSection.style.display = "none";

      activeReplyBox = replyBox;

      replyBox.removeEventListener("click", handleReplySend);
      replyBox.addEventListener("click", handleReplySend);
    });
  });

  deleteBox.forEach((del) => {
    del.addEventListener("click", function (e) {
      deleteContainer.style.display = "flex";
      overlay.style.display = "block";
      const container = del.closest(".comment__box");

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

  const numberBox = document.querySelectorAll(".number__box");

  numberBox.forEach((box) => {
    box.addEventListener("click", function (e) {
      const previousSibling = e.target.previousElementSibling;
      const nextSibling = e.target.nextElementSibling;

      if (e.target.classList.contains("minus__icon")) {
        if (previousSibling.textContent === 0) {
          previousSibling.textContent = 0;
        } else if (previousSibling.textContent > 0) {
          previousSibling.textContent--;
        }
      } else if (e.target.classList.contains("plus__icon")) {
        nextSibling.textContent++;
      }
    });
  });
};

const page = async function () {
  const res = await fetch("data.json");
  const data = await res.json();

  renderComment(data.comments[0]);
  renderComment(data.comments[1]);
  renderReply(data.comments[1].replies[0]);
  renderUserReply(data.comments[1].replies[1]);
  const replyComment = document.querySelectorAll(".reply__text__box");
  let activeReplyBox = null;

  const handleReplySend = function (e) {
    if (e.target.closest(".send")) {
      const replyInput = document.querySelector(".reply__input");
      const replyBox = document.querySelector(".reply__input-box");

      renderYou(replyInput.value);
      replyBox.style.display = "none";
      activeReplyBox = null;
      writingSection.style.display = "flex";
    }
  };

  replyComment.forEach((reply) => {
    reply.addEventListener("click", function (e) {
      const replyBox = document.querySelector(".reply__input-box");
      const replys = reply.closest(".box");
      activeReplyBox = replyBox;

      replyBox.style.display = "flex";
      const replyInput = document.querySelector(".reply__input");
      replys.insertAdjacentElement("afterend", replyBox);
      const userName = replys.querySelector(".user__name").textContent;
      replyInput.textContent = `@${userName}`;
      replyInput.value = `@${userName}`;

      replyBox.removeEventListener("click", handleReplySend);

      replyBox.addEventListener("click", handleReplySend);

      /////////////////////////
    });
  });

  const numberBox = document.querySelectorAll(".number__box");

  numberBox.forEach((box) => {
    box.addEventListener("click", function (e) {
      const previousSibling = e.target.previousElementSibling;
      const nextSibling = e.target.nextElementSibling;

      if (e.target.classList.contains("minus__icon")) {
        if (previousSibling.textContent === 0) {
          previousSibling.textContent = 0;
        } else if (previousSibling.textContent > 0) {
          previousSibling.textContent--;
        }
      } else if (e.target.classList.contains("plus__icon")) {
        nextSibling.textContent++;
      }
    });
  });
  const deleteBox = document.querySelectorAll(".delete__box");

  deleteBox.forEach((del) => {
    del.addEventListener("click", function (e) {
      deleteContainer.style.display = "flex";
      overlay.style.display = "block";
      const container = del.closest(".reply__box");

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

  const writingSection = document.querySelector(".writing__section");

  writingSection.addEventListener("click", function (e) {
    if (e.target.closest(".send")) {
      const writingSection = document.querySelector(".writing__section");
      renderYous(inputText.value);
      inputText.value = "";
    }
  });
  const editBox = document.querySelectorAll(".edit__box");

  editBox.forEach((edit) => {
    edit.addEventListener("click", function (e) {
      const container = edit.closest(".reply__box");
      const text = container.querySelector(".user__text").textContent.trim();

      const replyBox = document.querySelector(".reply__input-box");
      const replyInput = document.querySelector(".reply__input");
      replyBox.style.display = "flex";
      container.style.display = "none";
      replyInput.value = text;
      writingSection.style.display = "none";

      activeReplyBox = replyBox;

      replyBox.removeEventListener("click", handleReplySend);
      replyBox.addEventListener("click", handleReplySend);
    });
  });
};
page();
