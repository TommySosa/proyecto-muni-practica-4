window.onload = function(){
    let container = document.getElementById('loading-container')
    container.style.visibility = 'hidden';
    container.style.opacity = '0';
}

const loadingContainer = document.querySelector('.loading-container');

function hideLoading() {
  loadingContainer.style.display = 'none';
}

function showLoading() {
  loadingContainer.style.display = 'flex';
}