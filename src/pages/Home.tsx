import '../static/style.scss'





export function Home() {
    return (
      <>
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -2,
            overflow: "hidden",
          }}
        >
          <video
            style={{
              objectFit: "cover",
              width: "130%",
              height: "100%",
            }}
            src="imgs\bg-signup.mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>
  
        <div
          className="container d-flex align-items-center justify-content-center"
          style={{
            margin: "10px",
            border: ".5px transparent",
  
            textAlign: "center",
            color: "white",
            minHeight: "80vh",
          }}
        >
          <h1>
            The Journey Begins
            <br />
            <button type="button" className="btn btn-outline-light btn-lg">
              Store
            </button>
            
            <button type="button" className="btn btn-outline-light btn-lg ml-3">
              About
            </button>
          </h1>
        </div>
      </>
    );
  }
  