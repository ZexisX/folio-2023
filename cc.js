var isRedirecting = false;

document.addEventListener('keydown', function(event) {
  if ((event.ctrlKey || event.metaKey) && (event.key === 's' || event.key === 'u' || event.key === 'i' || event.key === 'F12') && !isRedirecting) {
    event.preventDefault();
    redirect();
  }
});

document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
  redirect();
});

document.addEventListener('DOMContentLoaded', function() {
  var currentUrl = window.location.href.toLowerCase();
  
  if (currentUrl.startsWith('view-source:https://levinhkhang.xyz/')) {
    redirect();
  }
});

function redirect() {
  if (!isRedirecting) {
    isRedirecting = true;
    window.location.href = 'http://levinhkhang.xyz/404';
  }
}

// Chặn sự kiện mặc định của trình duyệt cho các phím tắt khác (trừ Ctrl + S, Ctrl + U, Ctrl + I và F12)
document.addEventListener('keydown', function(event) {
  if ((event.ctrlKey || event.metaKey) && (event.key === 's' || event.key === 'u' || event.key === 'i' || event.key === 'F12')) {
    return;
  }
  event.preventDefault();
});

// Chặn sự kiện click chuột phải
document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});
