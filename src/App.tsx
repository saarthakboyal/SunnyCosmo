import { useEffect, useState } from "react";

export default function App() {
 const [isMobile, setIsMobile] = useState(false);

 useEffect(() => {
   const checkMobile = () => {
     setIsMobile(window.innerWidth <= 768);
   };

   checkMobile(); // run once on mount

   document.body.style.margin = "0";
   document.body.style.padding = "0";
   document.body.style.backgroundColor = "#000000";
   document.body.style.overflowX = "hidden";

   window.addEventListener("resize", checkMobile);

   return () => window.removeEventListener("resize", checkMobile);
 }, []);

 const socialLinks = [
   {
     href: "https://open.spotify.com/artist/3sSP6PTR2vTTnDtNIr2TyF",
     icon: "spotify",
     alt: "Spotify",
   },
   {
     href: "https://music.apple.com/us/artist/sunny-cosmo/1876620199",
     icon: "applemusic",
     alt: "Apple Music",
   },
   {
     href: "https://www.instagram.com/sunnycosmoofficial/",
     icon: "instagram",
     alt: "Instagram",
   },
   {
     href: "https://www.youtube.com/@SunnyCosmoOfficial",
     icon: "youtube",
     alt: "YouTube",
   },
 ];

 return (
   <div
     style={{
       background: "#000000",
       minHeight: "100vh",
       fontFamily: "Arial, sans-serif",
       color: "#ffffff",
       overflowX: "hidden",
       width: "100%",
     }}
   >
     {/* HERO */}
     <div
       style={{
         position: "relative",
         width: "100%",
         aspectRatio: isMobile ? "9 / 16" : "16 / 9",
         minHeight: isMobile ? "540px" : "900px",

         // ✅ ONLY HERO CHANGE (correct + safe)
         backgroundImage: isMobile
           ? "url('/background-mobile.png?v=2')"
           : "url('/background.png?v=2')",

         backgroundSize: "contain",
         backgroundPosition: "center top",
         backgroundRepeat: "no-repeat",
         backgroundColor: "#000000",
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
           justifyContent: isMobile ? "center" : "space-between",
           alignItems: "center",
           flexDirection: isMobile ? "column" : "row",
           gap: isMobile ? "18px" : "20px",
           padding: isMobile ? "20px 20px 0px" : "25px 50px",
           boxSizing: "border-box",
           zIndex: 10,
         }}
       >
         <a
           href="#home"
           style={{
             marginLeft: isMobile ? "0" : "120px",
           }}
         >
           <img
             loading="lazy"
             src="/logo.png"
             alt="Sunny Cosmo Logo"
             style={{
               height: isMobile ? "52px" : "82px",
               width: "auto",
               display: "block",
             }}
           />
         </a>

         <div
           style={{
             display: "flex",
             gap: isMobile ? "16px" : "18px",
             alignItems: "center",
             justifyContent: "center",
             flexWrap: "wrap",
             marginRight: isMobile ? "0" : "120px",
           }}
         >
           {socialLinks.map((item) => (
             <a
               key={item.icon}
               href={item.href}
               target="_blank"
               rel="noopener noreferrer"
             >
               <img
                 src={`https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/${item.icon}.svg`}
                 alt={item.alt}
                 style={{
                   width: isMobile ? "22px" : "24px",
                   height: isMobile ? "22px" : "24px",
                   filter: "invert(0)",
                 }}
               />
             </a>
           ))}
         </div>
       </header>

       {/* STYLES (UNCHANGED) */}
       <style>{`
         * {
           box-sizing: border-box;
         }

         html {
           scroll-behavior: smooth;
         }

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

         .video-container video {
           transition: filter 0.4s ease;
         }

         .video-container:hover video {
           filter: blur(6px);
         }

         input,
         textarea,
         button {
           -webkit-appearance: none;
           border-radius: 0;
         }

         @media (max-width: 768px) {
           .cover-container:hover img.cover-image,
           .video-container:hover video {
             filter: none;
           }

           .spotify-hover {
             opacity: 1;
           }
         }
       `}</style>
     </div>

     {/* MAIN CONTENT */}
     <section
       id="home"
       style={{
         padding: isMobile ? "50px 20px 0px" : "80px 20px 0px",
         borderTop: "1px solid rgba(255,255,255,0.2)",
         display: "flex",
         flexDirection: "column",
         alignItems: "center",
         background: "#000000",
       }}
     >
       <div
         style={{
           width: "100%",
           maxWidth: "1100px",
         }}
       >
         <div
           style={{
             display: "flex",
             flexDirection: isMobile ? "column" : "row",
             justifyContent: "space-between",
             alignItems: "center",
             gap: isMobile ? "35px" : "40px",
           }}
         >
           <div style={{ flex: 1, width: "100%" }}>
             <h1
               style={{
                 fontSize: isMobile ? "34px" : "52px",
                 marginBottom: "0",
                 lineHeight: "1.1",
                 textAlign: isMobile ? "center" : "left",
                 letterSpacing: isMobile ? "1px" : "0",
               }}
             >
               LISTEN TO “INTANGIBLE”
             </h1>
           </div>

           <div
             className="cover-container"
             style={{
               position: "relative",
               margin: "0 auto",
             }}
           >
             <a
               href="https://open.spotify.com/track/2ipzZklaoCRH1HlrYeXhAJ"
               target="_blank"
               rel="noopener noreferrer"
             >
               <img
                 loading="lazy"
                 className="cover-image"
                 src="/intangible.png"
                 alt="Intangible Cover Art"
                 style={{
                   width: isMobile ? "240px" : "320px",
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
                   width: isMobile ? "50px" : "70px",
                   height: isMobile ? "50px" : "70px",
                   filter: "invert(0)",
                 }}
               />
             </a>
           </div>
         </div>
       </div>
     </section>

     {/* LYRIC VIDEO */}
     <section
       style={{
         width: "100%",
         marginTop: isMobile ? "70px" : "120px",
         background: "#603cf0",
         padding: isMobile ? "60px 16px" : "80px 40px",
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
             fontSize: isMobile ? "26px" : "42px",
             marginBottom: "30px",
             textAlign: "center",
             lineHeight: "1.2",
             padding: isMobile ? "0 10px" : "0",
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
             borderRadius: isMobile ? "16px" : "20px",
           }}
         >
           <video
             autoPlay
             muted
             loop
             playsInline
             style={{
               width: "100%",
               display: "block",
               borderRadius: isMobile ? "16px" : "20px",
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
               left: "50%",
               transform: "translate(-50%, -50%)",
               background: "#000000",
               color: "#ffffff",
               padding: isMobile ? "10px 16px" : "12px 24px",
               textDecoration: "none",
               fontWeight: 900,
               letterSpacing: "2px",
               borderRadius: "10px",
               fontSize: isMobile ? "14px" : "28px",
               border: "2px solid #ffffff",
               whiteSpace: "nowrap",
             }}
           >
             WATCH NOW
           </a>
         </div>
       </div>
     </section>

     {/* CONTACT */}
     <section
       style={{
         width: "100%",
         background: "#000000",
         padding: isMobile ? "70px 20px 50px" : "120px 40px 80px",
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
           flexDirection: isMobile ? "column" : "row",
           justifyContent: "space-between",
           alignItems: "center",
           gap: isMobile ? "50px" : "80px",
         }}
       >
         {/* FORM */}
         <div style={{ flex: 1, width: "100%" }}>
           <h2
             style={{
               fontSize: isMobile ? "42px" : "72px",
               lineHeight: "1",
               marginBottom: "40px",
               color: "#ffffff",
               fontWeight: 900,
               textAlign: isMobile ? "center" : "left",
             }}
           >
             GET IN TOUCH!
           </h2>

           <form action="https://formspree.io/f/xrejyoyp" method="POST">
             {[
               { type: "text", placeholder: "FIRST NAME" },
               { type: "text", placeholder: "LAST NAME" },
               { type: "email", placeholder: "EMAIL ADDRESS" },
             ].map((field) => (
               <input
                 key={field.placeholder}
                 type={field.type}
                 placeholder={field.placeholder}
                 style={{
                   width: "100%",
                   background: "transparent",
                   border: "none",
                   borderBottom: "1px solid #ffffff",
                   padding: isMobile ? "16px 0" : "18px 0",
                   marginBottom: "28px",
                   color: "#ffffff",
                   fontSize: isMobile ? "16px" : "20px",
                   fontStyle: "italic",
                   fontFamily: '"Great Vibes", cursive',
                   outline: "none",
                 }}
               />
             ))}

             <textarea
               placeholder="TYPE YOUR MESSAGE..."
               style={{
                 width: "100%",
                 minHeight: isMobile ? "120px" : "140px",
                 background: "transparent",
                 border: "none",
                 borderBottom: "1px solid #ffffff",
                 padding: "18px 0",
                 marginBottom: "40px",
                 color: "#ffffff",
                 fontSize: isMobile ? "16px" : "20px",
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
                 padding: isMobile ? "16px" : "18px",
                 border: "none",
                 background: "#ffffff",
                 color: "#000000",
                 fontSize: isMobile ? "16px" : "20px",
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

         {/* CONTACT IMAGE */}
         <div
           style={{
             flex: 1,
             width: "100%",
             display: "flex",
             justifyContent: "center",
           }}
         >
           <img
             loading="lazy"
             src="/contact-image.png"
             alt="Sunny Cosmo"
             style={{
               width: "100%",
               maxWidth: isMobile ? "320px" : "450px",
               borderRadius: "20px",
               objectFit: "cover",
             }}
           />
         </div>
       </div>
     </section>

     {/* FOOTER */}
     <footer
       style={{
         background: "#000000",
         padding: isMobile ? "30px 20px 20px" : "40px 20px 10px",
         display: "flex",
         flexDirection: "column",
         alignItems: "center",
         textAlign: "center",
         justifyContent: "center",
         width: "100%",
         borderTop: "1px solid rgba(255,255,255,0.1)",
       }}
     >
       <img
         loading="lazy"
         src="/footer-logo.png"
         alt="Sunny Cosmo Logo"
         style={{
           height: isMobile ? "40px" : "55px",
           width: "auto",
           marginBottom: "20px",
         }}
       />

       <div
         style={{
           display: "flex",
           flexWrap: "wrap",
           justifyContent: "center",
           gap: isMobile ? "18px" : "22px",
           alignItems: "center",
           marginBottom: "20px",
         }}
       >
         {socialLinks.map((item) => (
           <a
             key={item.icon}
             href={item.href}
             target="_blank"
             rel="noopener noreferrer"
           >
             <img
               src={`https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/${item.icon}.svg`}
               alt={item.alt}
               style={{
                 width: "24px",
                 height: "24px",
                 filter: "invert(1)",
               }}
             />
           </a>
         ))}
       </div>

       <p
         style={{
           color: "#888888",
           fontSize: isMobile ? "11px" : "14px",
           letterSpacing: "2px",
           textAlign: "center",
           lineHeight: "1.6",
           padding: "0 10px",
         }}
       >
         © 2026 SUNNY COSMO. ALL RIGHTS RESERVED.
       </p>
     </footer>
   </div>
 );
}

