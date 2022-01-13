import React from "react";
import styles from './nftCard.module.scss'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/fontawesome-free-regular";


const NFTCard =(props)=>{
        
    return(
        <>
            <div className={`${styles.main_card}`}>
                <div className={`${styles.card}`}>

                    <div className={`${styles.cardImg}`}>
                        <img src={props.img} alt="Image" />
                    </div>
                    <div className={`${styles.cardData}`}>
                        <div className={`${styles.cardTitle} ${styles.titleText}`}>
                            <div>Lil Dudes Club</div>
                            <div>Price</div>
                        </div>
                        <div className={`${styles.cardTitle}  ${styles.subTitle}`}>
                            <div>{props.address}</div>
                            <div>{props.amount}</div>
                        </div>

                    </div>
                    <div className={`${styles.line}`}>
                        <div className={`${styles.cardData}`}>

                            <div className={`${styles.cardTitle}`}>
                                <div> Buy now </div>
                                <div>
                                <span className={`${styles.heart}`}><FontAwesomeIcon icon={faHeart} /></span>
                                5
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default NFTCard;