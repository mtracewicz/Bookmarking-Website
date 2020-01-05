function showFloater() {
  document.body.classList.add("show-floater");
}

function hideFloater() {
  if (document.body.classList.contains("show-floater")) {
    document.body.classList.remove("show-floater");
  }
}

function fillBookmarksList(bookmarks = []) {
  const bookamarksList = document.querySelector(".bookmarks-list");
  const bookmarkForm = document.querySelector(".bookmark-form");

  bookamarksList.innerHTML = bookmarks
    .map((bookmark,i) => {
      return `
        <a href="#" target="_blank" class="bookmark" data-id="${i}">
          <div class="img"></div>
          <div class="title">${bookmark.title}</div>
          <span class="glyphicon glyphicon-remove"></span>
        </a>
      `;
    })
    .join("");
  bookmarkForm.reset();
}

function saveBookmarks(bookmarks = []) {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

function createBookmark(e) {
  e.preventDefault();
  const bookmarkForm = document.querySelector(".bookmark-form");
  const bookmarkInput = bookmarkForm.querySelector('input[type="text"');
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  const title = bookmarkInput.value;
  if (title === "") {
    return;
  }
  bookmark = {
    title: title
  };
  bookmarks.push(bookmark);
  fillBookmarksList(bookmarks);
  saveBookmarks(bookmarks);
}

function removeBookmark(e){
  if(!e.target.matches('.glyphicon-remove')){
    return;
  }
  e.preventDefault();
  const index = e.target.parentNode.dataset.id;
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  bookmarks.splice(index,1);
  fillBookmarksList(bookmarks);
  saveBookmarks(bookmarks);
}

const input = document.querySelector("input[type=text]");
input.addEventListener("focusin", showFloater);
input.addEventListener("focusout", hideFloater);

const overlay = document.querySelector(".overlay");
overlay.addEventListener("click", hideFloater);

const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
fillBookmarksList(bookmarks);

const bookmarkForm = document.querySelector(".bookmark-form");
bookmarkForm.addEventListener("submit", createBookmark);

const bookamarksList = document.querySelector(".bookmarks-list");
bookamarksList.addEventListener('click',removeBookmark);