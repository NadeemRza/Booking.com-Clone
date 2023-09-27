import './featured.css';

const Featured = () => {
  return (
    <div className='featured' onClick={(e)=> {
      let url = e.target.closest(".featuredItem").querySelector("h2").innerText.replace(" ", "-");
      window.location.assign(`/hotels/${url}`)
    }}>
      <div className="featuredItem">
        <img src="https://r-xx.bstatic.com/xdata/images/region/250x250/49646.jpg?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o=" alt="img" className="featuredImg" />
        <div className="featuredTitles">
            <h2>Goa</h2>
            <h3>5,255 Properties</h3>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://r-xx.bstatic.com/xdata/images/city/250x250/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=" alt="img" className="featuredImg" />
        <div className="featuredTitles">
            <h2>Mumbai</h2>
            <h3>2,700 Properties</h3>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://r-xx.bstatic.com/xdata/images/city/250x250/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=" alt="img" className="featuredImg" />
        <div className="featuredTitles">
            <h2>New Delhi</h2>
            <h3>2,929 Properties</h3>
        </div>
      </div>
    </div>
  )
}

export default Featured;
