var isRedirecting = false;

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 's' && !isRedirecting) {
    event.preventDefault();
    redirect();
  } else if (event.ctrlKey && event.key === 'u' && !isRedirecting) {
    event.preventDefault();
    redirect();
  } else if (event.ctrlKey && event.key === 'i' && !isRedirecting) {
    event.preventDefault();
    redirect();
  } else if (event.key === 'F12' && !isRedirecting) {
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
    window.location.href = 'http://levinhkhang.xyz/';
  }
}

// Chặn sự kiện mặc định của trình duyệt cho các phím tắt khác (trừ Ctrl + S)
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 's', 'u', 'i', 'F12') {
    return;
  }
  event.preventDefault();
});
