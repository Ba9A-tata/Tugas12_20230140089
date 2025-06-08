function kirimData() {
  const nama = document.getElementById("nama").value;
  const nim = document.getElementById("nim").value;
  const peminatan = document.querySelector('input[name="peminatan"]:checked')?.value;
  const alamat = document.getElementById("alamat").value;
  const angkatan = document.getElementById("angkatan").value;
  const tanggal = document.getElementById("tanggal").value;

  alert(
    `Nama        : ${nama}\n` +
    `ID          : ${nim}\n` +
    `Keahlian    : ${peminatan}\n` +
    `Alamat      : ${alamat}\n` +
    `Tahun Daftar: ${angkatan}\n` +
    `Tanggal     : ${tanggal}`
  );
}
