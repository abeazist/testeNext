"use client";


import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import styles from "./page.module.css";
export default function SearchInput() {

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchIcon}>
        <MagnifyingGlassIcon size={24} color="currentColor" />
      </div>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Pesquisa"
      />
    </div>
  );
}