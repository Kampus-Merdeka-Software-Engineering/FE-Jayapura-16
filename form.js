document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const nameInput = document.querySelector('.input-name');
    const emailInput = document.querySelector('.input-email');
    const messageInput = document.querySelector('.input-message');
  
    form.addEventListener('submit', async (e) => {
      e.preventDefault(); // Mencegah pengiriman formulir default
  
      const formData = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value,
      };
  
      try {
        // Kirim data ke backend dengan menggunakan fetch atau metode lainnya
        const response = await fetch('/api/submit', {
          method: 'POST', // Metode HTTP
          headers: {
            'Content-Type': 'application/json', // Tipe konten adalah JSON
          },
          body: JSON.stringify(formData), // Mengonversi objek FormData menjadi JSON
        });
  
        if (response.ok) {
          // Form berhasil dikirim, lakukan tindakan yang sesuai (misalnya, tampilkan pesan sukses)
          alert('Form berhasil dikirim!');
        } else {
          // Form gagal dikirim, tampilkan pesan kesalahan
          alert('Terjadi kesalahan saat mengirim formulir.');
        }
      } catch (error) {
        console.error('Terjadi kesalahan:', error);
      }
    });
  });
  