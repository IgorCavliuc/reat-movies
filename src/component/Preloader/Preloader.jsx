import './preloader.css'

export default function Preloader() {
  return (
      <div className='center'>
    <div className="preloader-wrapper big active center">
    <div className="spinner-layer spinner-green-only">
      <div className="circle-clipper left">
        <div className="circle"></div>
      </div><div className="gap-patch">
        <div className="circle"></div>
      </div><div className="circle-clipper right">
        <div className="circle"></div>
      </div>
    </div>
  </div>
  </div>
  );
}
