function liked(button) {
    const icon = button.querySelector('i');
    const text = button.querySelector('b');
    if (text.textContent.trim() === "Like") {
        text.innerHTML = '<i class="fa-solid fa-check"></i> Liked';
    }
}