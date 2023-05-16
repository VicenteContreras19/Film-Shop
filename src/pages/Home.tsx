import { useNavigate } from 'react-router-dom';
import '../static/style.scss'





export function Home() {
  const navigate = useNavigate()
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
          <div className=''>
          <h1 className='m-4'>
            The Journey Begins
          </h1>
          <div className='d-flex align-items-center justify-content-center gap-5'>
            <button onClick={() => navigate('/store')} type="button" className="btn btn-outline-light btn-lg">
              Store
            </button>
            
            <button onClick={() => navigate('/about')} type="button" className="btn shadow btn-outline-light btn-lg ml-3">
              About
            </button>

          </div>
            </div>
        </div>
      </>
    );
  }
  