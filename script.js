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
  const bookamrkForm = document.querySelector(".bookmark-form");
  bookamarksList.innerHTML = bookmarks
    .map(bookmark => {
      return `<a href ="#" target="_blank" class = "bookmark">${bookmark.title}</a>`;
    })
    .join("");
  bookamrkForm.reset();
}

function saveBookmarks(bookmarks = []) {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

function createBookmark(e) {
  e.preventDefault();
  const bookmarkInput = bookamrkForm.querySelector('input[type="text"');
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
const input = document.querySelector("input[type=text]");
input.addEventListener("focusin", showFloater);
input.addEventListener("focusout", hideFloater);

const overlay = document.querySelector(".overlay");
overlay.addEventListener("click", hideFloater);

const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
fillBookmarksList(bookmarks);

const bookamrkForm = document.querySelector(".bookmark-form");
bookamrkForm.addEventListener("submit", createBookmark);
