document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 's') {
    // Xử lý khi người dùng bấm Ctrl + S
    event.preventDefault(); // Ngăn chặn hành động mặc định của trình duyệt (ví dụ: lưu trang)
    window.location.href = 'http://levinhkhang.xyz/404'; // Điều hướng đến URL khác
  } else if (event.ctrlKey && event.key === 'u') {
    // Xử lý khi người dùng bấm Ctrl + U
    event.preventDefault(); // Ngăn chặn hành động mặc định của trình duyệt (ví dụ: hiển thị mã nguồn)
    window.location.href = 'http://levinhkhang.xyz/404'; // Điều hướng đến URL khác
  } else if (event.ctrlKey && event.key === 'i') {
    // Xử lý khi người dùng bấm Ctrl + I
    event.preventDefault(); // Ngăn chặn hành động mặc định của trình duyệt (ví dụ: mở công cụ kiểm tra)
    window.location.href = 'http://levinhkhang.xyz/404'; // Điều hướng đến URL khác
  } else if (event.key === 'F12') {
    // Xử lý khi người dùng bấm F12
    event.preventDefault(); // Ngăn chặn hành động mặc định của trình duyệt (ví dụ: mở công cụ phát triển)
    window.location.href = 'http://levinhkhang.xyz/404'; // Điều hướng đến URL khác
  }
});

document.addEventListener('contextmenu', function(event) {
  event.preventDefault(); // Ngăn chặn hiển thị menu ngữ cảnh mặc định
  window.location.href = 'http://levinhkhang.xyz/404'; // Điều hướng đến URL khác
});
