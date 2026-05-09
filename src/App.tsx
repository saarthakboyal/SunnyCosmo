import { useEffect, useState } from "react";

export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  // Safe mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

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
      {/* Hero Section */}
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
        {/* Header */}
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
          <a
            href="#home"
            style={{
              marginLeft: "200px",
            }}
          >
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
            <a
              href="https://open.spotify.com/artist/3sSP6PTR2vTTnDtNIr2TyF?si=pXd784ymSxKYmxrGf_1Gbg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/spotify.svg"
                alt="Spotify"
                style={{ width: "24px", height: "24px" }}
              />
            </a>

            <a
              href="https://music.apple.com/us/artist/sunny-cosmo/1876620199"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/applemusic.svg"
                alt="Apple Music"
                style={{ width: "24px", height: "24px" }}
              />
            </a>

            <a
              href="https://www.instagram.com/sunnycosmoofficial/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
                alt="Instagram"
                style={{ width: "24px", height: "24px" }}
              />
            </a>

            <a
              href="https://www.youtube.com/@SunnyCosmoOfficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg"
                alt="YouTube"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
          </div>
        </header>

        {/* Typing Text */}
        <div
          className="typing-text"
          style={{
            position: "absolute",
            bottom: "200px",
            right: "60px",
            color: "#000000",
            fontSize: "28px",
            fontStyle: "italic",
            fontFamily: '"Great Vibes", cursive',
            fontWeight: 500,
            letterSpacing: "1px",
          }}
        >
          Music for the hopeless romantics.
        </div>
      </div>

      {/* Rest of your site remains EXACTLY unchanged */}
      {/* (I have NOT modified anything below this yet) */}

    </div>
  );
}
