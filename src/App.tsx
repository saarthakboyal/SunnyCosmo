export default function App() {
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
                style={{
                  width: "24px",
                  height: "24px",
                  filter: "invert(0)",
                }}
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
                style={{
                  width: "24px",
                  height: "24px",
                  filter: "invert(0)",
                }}
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
                style={{
                  width: "24px",
                  height: "24px",
                  filter: "invert(0)",
                }}
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
                style={{
                  width: "24px",
                  height: "24px",
                  filter: "invert(0)",
                }}
              />
            </a>
          </div>
        </header>
        <>
          <style>{`
    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 29ch;
      }
    }

    @keyframes blink {
      50% {
        border-color: transparent;
      }
    }

    .typing-text {
      overflow: hidden;
      white-space: nowrap;
      border-right: 2px solid #000000;
      animation:
  typing 3s steps(29, end) infinite,
  blink 0.8s step-end infinite;
    }
  `}</style>

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
        </>
      </div>

      {/* Main Content */}
      <section
        id="home"
        style={{
          padding: "80px 20px 0px",
          borderTop: "1px solid rgba(255,255,255,0.25)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "#000000",
        }}
      >
        {/* Intangible Section */}
        <div
          style={{
            width: "100%",
            maxWidth: "1100px",
            padding: "0 20px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "40px",
            }}
          >
            <div style={{ flex: 1, minWidth: "280px" }}>
              <h1
                style={{
                  fontSize: "52px",
                  marginBottom: "20px",
                  lineHeight: "1.1",
                }}
              >
                LISTEN TO “INTANGIBLE”
              </h1>
            </div>

            <div
              className="cover-container"
              style={{
                position: "relative",
              }}
            >
              <style>{`
    .cover-container img.cover-image {
      transition: all 0.4s ease;
    }

    .cover-container:hover img.cover-image {
      filter: brightness(0.7) saturate(1.2) blur(6px);
    }

    .spotify-hover {
      opacity: 0;
      transition: opacity 0.4s ease;
    }

    .cover-container:hover .spotify-hover {
      opacity: 1;
    }
  `}</style>

              <a
                href="https://open.spotify.com/track/2ipzZklaoCRH1HlrYeXhAJ?si=7bad55340e5a410e"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="cover-image"
                  src="/intangible.png"
                  alt="Intangible Cover Art"
                  style={{
                    width: "320px",
                    maxWidth: "85vw",
                    borderRadius: "24px",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
                    display: "block",
                  }}
                />

                <img
                  className="spotify-hover"
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/spotify.svg"
                  alt="Spotify"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "70px",
                    height: "70px",
                    filter: "invert(0)",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lyric Video Section */}
      <section
        style={{
          width: "100%",
          marginTop: "120px",
          background: "#603cf0",
          padding: "80px 40px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              marginBottom: "30px",
              textAlign: "center",
            }}
          >
            INTANGIBLE (OFFICIAL LYRIC VIDEO)
          </h2>

          <div
            className="video-container"
            style={{
              position: "relative",
              width: "100%",
              overflow: "hidden",
              borderRadius: "20px",
            }}
          >
            <style>{`
  .video-container video {
    transition: filter 0.4s ease;
  }

  .video-container:hover video {
    filter: blur(6px);
  }
`}</style>
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: "100%",
                display: "block",
                borderRadius: "20px",
              }}
            >
              <source src="/preview.mp4" type="video/mp4" />
            </video>

            <a
              href="https://www.youtube.com/watch?v=IDdnaRZnNUI"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: "absolute",
                top: "50%",
                left: "75%",
                transform: "translate(-50%, -50%)",
                background: "#000000",
                color: "#ffffff",
                padding: "12px 24px",
                textDecoration: "none",
                fontWeight: 900,
                letterSpacing: "2px",
                borderRadius: "10px",
                fontSize: "28px",
                border: "2px solid #ffffff",
                whiteSpace: "nowrap",
              }}
            >
              WATCH NOW
            </a>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section
        style={{
          width: "100%",
          background: "#000000",
          padding: "120px 40px 80px",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "80px",
          }}
        >
          <div style={{ flex: 1, minWidth: "320px" }}>
            <h2
              style={{
                fontSize: "72px",
                lineHeight: "1",
                marginBottom: "50px",
                color: "#ffffff",
                fontWeight: 900,
              }}
            >
              GET IN TOUCH!
            </h2>

            <form action="https://formspree.io/f/xrejyoyp" method="POST">
              <input
                type="text"
                name="firstName"
                placeholder="FIRST NAME"
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid #ffffff",
                  padding: "18px 0",
                  marginBottom: "30px",
                  color: "#ffffff",
                  fontSize: "20px",
                  fontStyle: "italic",
                  fontFamily: '"Great Vibes", cursive',
                  outline: "none",
                }}
              />

              <input
                type="text"
                name="lastName"
                placeholder="LAST NAME"
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid #ffffff",
                  padding: "18px 0",
                  marginBottom: "30px",
                  color: "#ffffff",
                  fontSize: "20px",
                  fontStyle: "italic",
                  fontFamily: '"Great Vibes", cursive',
                  outline: "none",
                }}
              />

              <input
                type="email"
                name="email"
                placeholder="EMAIL ADDRESS"
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid #ffffff",
                  padding: "18px 0",
                  marginBottom: "50px",
                  color: "#ffffff",
                  fontSize: "20px",
                  fontStyle: "italic",
                  fontFamily: '"Great Vibes", cursive',
                  outline: "none",
                }}
              />
              <textarea
                name="message"
                placeholder="TYPE YOUR MESSAGE..."
                style={{
                  width: "100%",
                  minHeight: "140px",
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid #ffffff",
                  padding: "18px 0",
                  marginBottom: "50px",
                  color: "#ffffff",
                  fontSize: "20px",
                  fontStyle: "italic",
                  fontFamily: '"Great Vibes", cursive',
                  outline: "none",
                  resize: "vertical",
                }}
              />

              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "18px",
                  border: "none",
                  background: "#ffffff",
                  color: "#000000",
                  fontSize: "20px",
                  fontWeight: 700,
                  borderRadius: "10px",
                  cursor: "pointer",
                  letterSpacing: "2px",
                }}
              >
                SUBMIT
              </button>
            </form>
          </div>

          <div
            style={{
              flex: 1,
              minWidth: "320px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src="/contact-image.png"
              alt="Sunny Cosmo"
              style={{
                width: "100%",
                maxWidth: "450px",
                borderRadius: "20px",
                objectFit: "cover",
              }}
            />
          </div>
          <footer
            style={{
              background: "#000000",
              padding: "40px 20px 10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              width: "100%",
              textAlign: "center",
            }}
          >
            <img
              src="/footer-logo.png"
              alt="Sunny Cosmo Logo"
              style={{
                height: "55px",
                width: "auto",
                marginBottom: "20px",
              }}
            />

            <div
              style={{
                display: "flex",
                gap: "22px",
                alignItems: "center",
                marginBottom: "20px",
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
                  style={{
                    width: "24px",
                    height: "24px",
                    filter: "invert(1)",
                  }}
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
                  style={{
                    width: "24px",
                    height: "24px",
                    filter: "invert(1)",
                  }}
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
                  style={{
                    width: "24px",
                    height: "24px",
                    filter: "invert(1)",
                  }}
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
                  style={{
                    width: "24px",
                    height: "24px",
                    filter: "invert(1)",
                  }}
                />
              </a>
            </div>

            <p
              style={{
                color: "#888888",
                fontSize: "14px",
                letterSpacing: "2px",
                textAlign: "center",
              }}
            >
              © 2026 SUNNY COSMO. ALL RIGHTS RESERVED.
            </p>
          </footer>
        </div>
      </section>
    </div>
  );
}
