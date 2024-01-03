function addListener(btn, modal) {
    btn.onclick = function() {
        modal.style.display = "block";
    }
}

employeeRetentionBtn = document.getElementById("employeeRetention")
employeeRetentionBtn.onclick = function() {
    window.open("//ying-sunwan-employee-retention-prediction.streamlit.app");
}

pcosBtn = document.getElementById("pcos")
pcosBtn.onclick = function() {
    window.open("//drive.google.com/file/d/1kF4mtrX7DZwbXOBEOc2sjEGaOJXO2fId/view");
}

guiBtn = document.getElementById("gui")
guiBtn.onclick = function() {
    window.open("//ying-wan.gitbook.io/libs-gui/");
}

labBtn = document.getElementById("husseinLab")
labBtn.onclick = function() {
    window.open("//ying-sunwan.github.io/Hussein_Lab/");
}

gameBtn = document.getElementById("jsGame")
gameModal = document.getElementById("jsGameModal")
addListener(gameBtn, gameModal)

inventoryAppBtn = document.getElementById("inventoryApp")
inventoryAppModal = document.getElementById("inventoryAppModal")
addListener(inventoryAppBtn, inventoryAppModal)

expenseAppBtn = document.getElementById("expenseApp")
expenseAppModal = document.getElementById("expenseAppModal")
addListener(expenseAppBtn, expenseAppModal)

window.onclick = function(event) {
    if (event.target == inventoryAppModal) {
        inventoryAppModal.style.display = "none";
    }
    else if (event.target == expenseAppModal) {
        expenseAppModal.style.display = "none";
    }
    else if (event.target == gameModal) {
        gameModal.style.display = "none";
    }
}


