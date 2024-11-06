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

inventoryAppBtn = document.getElementById("inventoryApp")
inventoryAppModal = document.getElementById("inventoryAppModal")
closeInventoryApp = document.getElementById("inventoryAppClose");
addListener(inventoryAppBtn, inventoryAppModal)

expenseAppBtn = document.getElementById("expenseApp")
expenseAppModal = document.getElementById("expenseAppModal")
closeExpenseApp = document.getElementById("expenseAppClose");
addListener(expenseAppBtn, expenseAppModal)

window.onclick = function(event) {
    console.log(event.target== closeGame)
    if (event.target == inventoryAppModal || event.target == closeInventoryApp) {
        inventoryAppModal.style.display = "none";
    }
    else if (event.target == expenseAppModal || event.target == closeExpenseApp) {
        expenseAppModal.style.display = "none";
    }
}
