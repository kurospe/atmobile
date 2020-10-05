Feature('test');

Scenario('test something', ({ I }) => {
    I.fillField('Masukkan Email / No Telepon Anda', 'akuntestspe+atemk1@gmail.com');
    I.fillField('Masukan Password Anda', 'Test@123');
    I.tap('MASUK');
    I.see('Pilih Outlet');
});

//npx codeceptjs run --steps test_test.js