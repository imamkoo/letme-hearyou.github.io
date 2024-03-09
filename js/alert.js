const scriptURL =
    'https://script.google.com/macros/s/AKfycbwYXSrPDwQ7vVj-hC14XkKSROyzXaOSMLcVCnCYjxAXU_hY0B-0tRZSEvp41wgF7sWc/exec';
const form = document.forms['submit-to-google-sheet'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', e => {
    e.preventDefault()
    // KETIKA TOMBOL SUBMIT DIKLIK
    // TAMPILKAN TOMBOL LOADING , HILANGKAN TOMBOL KIRIM
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            // TAMPILKAN TOMBOL KIRIM, HILANGKAN TOMBOL LOADING
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            // TAMPILKAN ALERT
            myAlert.classList.toggle('d-none');
            // RESET FORM
            form.reset();
            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
});