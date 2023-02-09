import React from "react";
import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";
import { PrismicLink } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.HeaderSlice} HeaderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeaderSlice>} HeaderProps
 * @param { HeaderProps }
 */
const Header = ({ slice }) => (
    <section>
        {/* Header */}
        <header className={styles.header}>
            <div className={styles.wrapper}>
                {/* Logo Link */}
                <div className={styles.logo}>
                    <Link href="/">
                        {/* <Image
                            src={data.site_logo.url}
                            alt={data.site_logo.alt}
                            width={100}
                            height={100}
/> */}
                    </Link>
                </div>
                {/* Title Link */}
                <Link className={styles.title} href="#">
                    {/* <PrismicRichText field={data.site_title} /> */}
                </Link>
                {/* Nav */}
                <nav className={styles.nav}>
                    <ul>
                        {/* TODO: Can't use repeatalbe zone for links */}
                        {slice?.items?.map((item, i) => {
                            return (
                                <li key={JSON.stringify(item)}>
                                    <PrismicLink field={item.navigation_links}>
                                        {/* TODO: Can't use Rich Text here  */}
                                        {item.navigation_text}
                                    </PrismicLink>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    </section>
);

export default Header;
