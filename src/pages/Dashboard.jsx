import React from "react";
import TopBar from "../components/TopBar";
import BottomBar from "../components/BottomBar";
import KopiCard from "../components/KopiCard";

const listKopi = [
  {
    nama: "Espresso",
    deskripsi: "Kopi pekat hasil ekstraksi bertekanan tinggi dengan krema tebal di atasnya.",
    gambar: "/espresso.webp",
  },
  {
    nama: "Cappuccino",
    deskripsi: "Paduan espresso dengan susu hangat dan busa susu lembut yang tebal.",
    gambar: "/cappucino.jpg",
  },
  {
    nama: "Cold Brew",
    deskripsi: "Kopi yang diseduh air dingin selama 12 jam, rasa halus dan rendah asam.",
    gambar: "/coldbrew.jpg",
  },
  {
    nama: "Dirty Latte",
    deskripsi: "Espresso hangat yang dituangkan perlahan di atas susu dingin segar.",
    gambar: "/dirtylatte.jpg",
  },
  {
    nama: "Mont Blanc",
    deskripsi: "Kopi dengan sentuhan krim lembut khas rasa manis chestnut.",
    gambar: "/montblanc.jpg",
  },
  {
    nama: "Butterscotch",
    deskripsi: "Kopi susu dengan perpaduan sirup karamel mentega gurih manis.",
    gambar: "/butterscotch.jpg",
  },
  {
    nama: "V60",
    deskripsi: "Kopi manual brew filter dengan kejernihan rasa dan aroma floral khas.",
    gambar: "/v60.jpg",
  },
  {
    nama: "moccacino",
    deskripsi: "Kopi manual brew filter dengan kejernihan rasa dan aroma floral khas.",
    gambar: "/v60.jpg",
  },
];

const Dashboard = () => {
  const [jenis, setJenis] = React.useState("All");

  let tempKopi;

  if (jenis === "All") {
    tempKopi = listKopi.map((item, index) => <KopiCard key={index} nama={item.nama} deskripsi={item.deskripsi} gambar={item.gambar} />);
  } else if (jenis === "Brew") {
    tempKopi = (
      <>
        <KopiCard nama={listKopi[6].nama} deskripsi={listKopi[6].deskripsi} gambar={listKopi[6].gambar} />
        <KopiCard nama={listKopi[7].nama} deskripsi={listKopi[7].deskripsi} gambar={listKopi[7].gambar} />
        <KopiCard nama={listKopi[2].nama} deskripsi={listKopi[2].deskripsi} gambar={listKopi[2].gambar} />
      </>
    );
  } else if (jenis === "Susu") {
    tempKopi = (
      <>
        <KopiCard nama={listKopi[1].nama} deskripsi={listKopi[1].deskripsi} gambar={listKopi[1].gambar} />
        <KopiCard nama={listKopi[3].nama} deskripsi={listKopi[3].deskripsi} gambar={listKopi[3].gambar} />
        <KopiCard nama={listKopi[5].nama} deskripsi={listKopi[5].deskripsi} gambar={listKopi[5].gambar} />
      </>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#f5f0eb",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: "sans-serif",
      }}
    >
      <TopBar title="Dashboard Kopi" />

      <div
        style={{
          flex: 1,
          padding: "16px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
          gap: "14px",
          alignContent: "start",
        }}
      >
        {tempKopi}
      </div>

      <button id="btnAll" onClick={() => setJenis("All")}>
        All
      </button>

      <button id="btnSusu" onClick={() => setJenis("Susu")}>
        Susu
      </button>

      <button id="btnBrew" onClick={() => setJenis("Brew")}>
        Brew
      </button>

      <BottomBar active="dashboard" />
    </div>
  );
};

export default Dashboard;
