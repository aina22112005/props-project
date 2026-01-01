import styles from "./SideBar.module.css";

function SideBar({ title }) {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.title}>{title}</h2>

      <p>Home</p>
      <p>Anime</p>
      <p>Trading</p>
      <p>Category</p>

      <hr />

      <p>History</p>
      <p>Top Up</p>
      <p>Save Videos</p>
      <p>Likes</p>

      <hr />

      <h4>Favourite Channels</h4>
      <p>Deepu</p>
      <p>Anlin</p>
      <p>Niki</p>
      <p>bhg</p>

      <button>Download App</button>
    </div>
  );
}

export default SideBar;
