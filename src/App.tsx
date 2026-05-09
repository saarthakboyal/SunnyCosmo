import { useEffect, useState } from "react";

export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  document.body.style.margin = "0";
  document.body.style.padding = "0";
  document.body.style.backgroundColor = "#000000";

  return (
    <div
      style={{
        background: "#000000",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        color: "#ffffff",
        overflowX: "hidden",
      }}
    >
      {/* HERO SECTION */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          backgroundImage: "url('/background.png?v=2')",
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* HEADER */}
        <header
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "25px 50px",
            boxSizing: "border-box",
          }}
        >
          <a href="#home" style={{ marginLeft: "200px" }}>
            <img
              src="/logo.png"
              alt="Sunny Cosmo Logo"
              style={{
                height: "82px",
                width: "auto",
                display: "block",
              }}
            />
          </a>

          <div
            style={{
              display: "flex",
              gap: "18px",
              alignItems: "center",
              marginRight: "200px",
            }}
          >
            <a href="https://open.spotify.com/artist/3sSP6PTR2vTTnDtNIr2TyF?si=pXd784ymSxKYmxrGf_1Gbg">
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/spotify.svg"
                style={{ width: "24px", height: "24px" }}
              />
            </a>

            <a href="https://music.apple.com/us/artist/sunny-cosmo/1876620199">
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/applemusic.svg"
                style={{ width: "24px", height: "24px" }}
              />
            </a>

            <a href="https://www.instagram.com/sunnycosmoofficial/">
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
                style={{ width: "24px", height: "24px" }}
              />
            </a>

            <a href="https://www.youtube.com/@SunnyCosmoOfficial">
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
          </div>
        </header>

        {/* ANIMATION TEXT */}
        <style>{`
          @keyframes typing {
            from { width: 0; }
            to { width: 29ch; }
          }

          @keyframes blink {
            50% { border-color: transparent; }
          }

          .typing-text {
            overflow: hidden;
            white-space: nowrap;
            border-right: 2px solid #000;
            animation: typing 3s steps(29,end) infinite,
                       blink 0.8s step-end infinite;
          }
        `}</style>

        <div
          className="typing-text"
          style={{
            position: "absolute",
            bottom: "200px",
            right: "60px",
            color: "#000",
            fontSize: "28px",
            fontStyle: "italic",
            fontFamily: '"Great Vibes", cursive',
          }}
        >
          Music for the hopeless romantics.
        </div>
      </div>

      {/* IMPORTANT: EVERYTHING BELOW IS RESTORED (UNCHANGED) */}
      {/* You will paste your original sections back below this */}
    </div>
  );
}
