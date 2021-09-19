/* eslint-disable react-hooks/rules-of-hooks */
import { React, useState } from "react";
import "./game.css";

export default function game() {
  const contoh = useState(false);
  console.log("[state]", contoh);
  const [show, setShow] = useState(false);
  const [user1, setUser1] = useState("");
  const [user2, setUser2] = useState("");
  const [soal, setSoal] = useState("");
  const [jawab, setJawab] = useState("");
  const submit = () => {
    let a =
      soal == jawab
        ? "Soal dari " + user1 + " dijawab dengan benar oleh " + user2 
        : user2 + " menjawab salah";
    alert(a);
  };
  return (
    <div className="kotak">
      <div className="kotaktampil">
        {show && (
          <form onSubmit={submit}>
            <div className="subjudul">
              <p className="subjudul1">
                Game Tebak Kata atau Kalimat
              </p>
              <p className="subjudul2">
                (*inputnya menggunakan useState)
              </p>
            </div>
            <label>Penanya</label>
            <input type="text" placeholder="Nama penanya" value={user1}
              onChange={(event) => setUser1(event.target.value)}/>
            <br></br><br></br>
            <label>Penjawab</label>
            <input type="text" placeholder="Nama penjawab" value={user2}
              onChange={(event) => setUser2(event.target.value)}/>
            <br></br><br></br>
            <label>Kata/Kalimat Soal</label>
            <input type="password" required placeholder="Soal"
              value={soal}
              onChange={(event) => setSoal(event.target.value)}/>
            <br></br><br></br>
            <label>Masukkan Jawaban</label>
            <input type="text" required placeholder="Jawaban"
              value={jawab}
              onChange={(event) => setJawab(event.target.value)}
            />
            <br></br><br></br>
            <input type="submit" value="Cek Hasil" className="cek"
              onChange={(event) => setJawab(event.target.value)}
            />
            <br></br><br></br>
          </form>
        )}
      </div>
      <button className="Button tombol" onClick={() => setShow(!show)}>
        {show ? "Sembunyikan" : "Tampilkan"}
      </button>
    </div>
  );
}
