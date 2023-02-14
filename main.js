// Created by HanSiBin (Abdurauf Egamov)
function toggleMode() {
    let myBox = document.getElementById('myBox');
    let myBar = document.getElementById('myBar');
    let myBtn = document.getElementById('mode-btn');
    let ico0 = document.getElementById('ico0');
    let ico1 = document.getElementById('ico1');
    let ico2 = document.getElementById('ico2');
    let ico3 = document.getElementById('ico3');
    let ico4 = document.getElementById('ico4');
    let ico5 = document.getElementById('ico5');
    let ico6 = document.getElementById('ico6');
    let ico7 = document.getElementById('ico7');
    let ico8 = document.getElementById('ico8');
    let ico9 = document.getElementById('ico9');
    
    myBox.classList.toggle("dark-mode");
    myBar.classList.toggle("dark-mode");
    myBtn.classList.toggle("dark-mode");
    ico0.classList.toggle("dark-mode");
    ico1.classList.toggle("dark-mode");
    ico2.classList.toggle("dark-mode");
    ico3.classList.toggle("dark-mode");
    ico4.classList.toggle("dark-mode");
    ico5.classList.toggle("dark-mode");
    ico6.classList.toggle("dark-mode");
    ico7.classList.toggle("dark-mode");
    ico8.classList.toggle("dark-mode");
    ico9.classList.toggle("dark-mode");
}