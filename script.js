document.addEventListener("DOMContentLoaded", () => {
    const uploadSection = document.getElementById("uploadSection");
    const imageSection = document.getElementById("imageSection");
    const imageUpload = document.getElementById("imageUpload");
    const uploadButton = document.getElementById("uploadButton");
    const uploadedImage = document.getElementById("uploadedImage");
    const likeButton = document.getElementById("likeButton");
    const commentBox = document.getElementById("commentBox");
    const submitComment = document.getElementById("submitComment");
    const commentsSection = document.getElementById("commentsSection");
    const commentsList = document.getElementById("commentsList");

    let userRole = "uploader"; // Change this to "liker" or "commenter" based on user role

    function initGame() {
        if (userRole === "uploader") {
            uploadSection.classList.remove("hidden");
        } else {
            imageSection.classList.remove("hidden");
            if (userRole === "liker") {
                likeButton.classList.remove("hidden");
            } else if (userRole === "commenter") {
                commentBox.classList.remove("hidden");
                submitComment.classList.remove("hidden");
            }
        }
    }

    uploadButton.addEventListener("click", () => {
        const file = imageUpload.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                uploadedImage.src = e.target.result;
                imageSection.classList.remove("hidden");
                uploadSection.classList.add("hidden");
            };
            reader.readAsDataURL(file);
        }
    });

    likeButton.addEventListener("click", () => {
        alert("Bild geliked!");
    });

    submitComment.addEventListener("click", () => {
        const comment = commentBox.value;
        if (comment) {
            const listItem = document.createElement("li");
            listItem.textContent = comment;
            commentsList.appendChild(listItem);
            commentBox.value = "";
            commentsSection.classList.remove("hidden");
        }
    });

    initGame();
});
