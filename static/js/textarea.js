//auto-resize text area - Geeks for Geeks
textarea = document.querySelector("#review");
        textarea.addEventListener('input', autoResize, false);
    
        function autoResize() {
            this.style.height = 'auto';
            this.style.height = this.scrollHeight + 'px';
        }