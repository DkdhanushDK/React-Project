import { useState } from "react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="banner-bar">
      Ride the wave of our new creamy and sensual solar fragrance,{" "}
      <a href="/product/1">Appnstruct You Soie</a> ☀️
      <button className="banner-close" onClick={() => setVisible(false)}>×</button>
    </div>
  );
}
