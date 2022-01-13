import React, { useState } from "react";
import styles from "./nftPage.module.scss";

import NFTCard from "../../components/NFTCard";
import SideBar from "../../components/SideBar/SideBar";
const NFTPage = () => {
  const nftData1 = [
    {
      id: 1,

      walletAddress: "asd",
      amount: 10,
      expirationTimestamp: "",
      collectionSlug: "",
      tokenld: "",
      src: "./assets/girl.png",
    },

    {
      id: 2,

      walletAddress: "sdfasd",
      amount: 20,
      expirationTimestamp: "",
      collectionSlug: "",
      tokenld: "",
      src: "./assets/img2.png",
    },

    {
      id: 3,
      src: "./assets/img3.jpg",
      walletAddress: "s12wfas",
      amount: 30,
      expirationTimestamp: "",
      collectionSlug: "",
      tokenld: "",
    },

    {
      src: "./assets/img4.png",
      id: 4,
      walletAddress: "ssdfgdfasd",
      amount: 40,
      expirationTimestamp: "",
      collectionSlug: "",
      tokenld: "",
    },

    {
      id: 5,
      src: "./assets/img5.png",
      walletAddress: "ghghjfas",
      amount: 50,
      expirationTimestamp: "sdfasdf",
      collectionSlug: "",
      tokenld: "",
    },

    {
      id: 6,
      src: "./assets/img6.png",
      walletAddress: "jhghklasd",
      amount: 60,
      expirationTimestamp: "sdfas",
      collectionSlug: "",
      tokenld: "",
    },

    {
      id: 7,
      src: "./assets/img7.png",
      walletAddress: "dfgoidfas",
      amount: 70,
      expirationTimestamp: "",
      collectionSlug: "",
      tokenld: "",
    },
    {
      id: 8,
      src: "./assets/img8.gif",
      walletAddress: "dfgoidfas",
      amount: 70,
      expirationTimestamp: "",
      collectionSlug: "",
      tokenld: "",
    },
    {
      id: 9,
      src: "./assets/img9.png",
      walletAddress: "dfgoidfas",
      amount: 70,
      expirationTimestamp: "",
      collectionSlug: "",
      tokenld: "",
    },
  ];

  const [mainNfTdata, setmainNfTdata] = useState(nftData1);
  const [nftData, setNFTData] = useState(nftData1);
  const [isActive, setActive] = useState("");
  const [open, setOpen] = useState(false);

  const navShow = () => {
    setOpen(!open);
  };

  const getChild = (data) => {
    const filteredData = mainNfTdata.filter(
      (f) => f.amount >= data.min_value && f.amount <= data.max_value
    );
    setNFTData(filteredData);
  };
  const getNav = (data) => {
    setActive(data);
  };
  return (
    <>
      <div className={`${styles.wrapper}`}>
        <div className={styles.leftPanel}>
          <SideBar getChild={getChild} />
        </div>

        <div className={styles.rightPanel}>
          {nftData &&
            nftData.map((item, index) => {
              return (
                <NFTCard
                  key={index}
                  id={item.id}
                  price={item.price}
                  amount={item.amount}
                  address={item.walletAddress}
                  img={item.src}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default NFTPage;
