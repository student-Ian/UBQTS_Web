"use client";

import { useEffect } from "react";
import { TFunction } from "i18next";

import closeIcon from "@/public/img/closeIcon.png";
import "./SidebarBase.css";

type SidebarBaseProps = {
    t: ((key: string) => string) & TFunction<"translation", undefined>;
};

export const SidebarBase = ({ t }: SidebarBaseProps) => {
    useEffect(() => {
        const sidebar = document.querySelector('.sidebar')!;
        const clsBtn = document.querySelector('.clsBtn > img')!;
        const pageBlur = document.querySelector('.pageBlur')!;
        const sidebarMenu = document.querySelector('.sidebarMenu')!;

        const handleSidebarHide = () => {
            sidebarMenu.classList.remove('active');
            setTimeout(() => {
                sidebar.classList.remove('active');
            }, 800);
        }

        clsBtn.addEventListener('click', handleSidebarHide);
        pageBlur.addEventListener('click', handleSidebarHide);
    }, []);

    return (
        <div className="sidebar prevent-select">
            <div className="pageBlur" />
            <div className="sidebarMenu">
                <div className="clsBtn">
                    <img src={closeIcon.src} alt="close" />
                </div>
                <a className="sidebarLink" href="/#">{t("home-page")}</a>
                <div className="linkSplit" />
                {/* <a className="sidebarLink" href="product_solutions">產品解決方案</a>
                <div className="linkSplit" /> */}
                <a className="sidebarLink" href="partners">{t("partners")}</a>
                <div className="linkSplit" />
                <a className="sidebarLink" href="contact_us">{t("contact-us")}</a>
                <div className="linkSplit" />
                <a className="sidebarLink" href="news">{t("news")}</a>
                <div className="linkSplit" />
                <a className="sidebarLink" href="download_files">{t("downloads")}</a>
                <div className="linkSplit" />
                <a className="sidebarLink" href="admin">{t("login")}</a>
            </div>
        </div>
    );
};

// export default SidebarBase;