import { IonContent, IonPage } from '@ionic/react';
import React from 'react';

const UserPage: React.FC = () => {

    return (
        <IonPage>
            <IonContent>
                <svg xmlns="http://www.w3.org/2000/svg" width="433" height="179" viewBox="0 0 433 179" fill="none">
                    <g filter="url(#filter0_d_19_59)">
                        <path d="M4 0H429V0C429 60.3789 392.19 114.657 336.094 136.992L289.95 155.365C239.037 175.637 182.194 175.074 131.692 153.798L96.1551 138.826C40.3105 115.298 4 60.5985 4 0V0Z" fill="url(#paint0_linear_19_59)"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_19_59" x="0" y="0" width="433" height="178.173" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_19_59"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_19_59" result="shape"/>
                        </filter>
                        <linearGradient id="paint0_linear_19_59" x1="216.5" y1="0" x2="216.5" y2="549.5" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FF7C50"/>
                        <stop offset="1" stop-color="#FF4000"/>
                        </linearGradient>
                    </defs>
                </svg>
            </IonContent>
        </IonPage>
    );
};

export default UserPage;