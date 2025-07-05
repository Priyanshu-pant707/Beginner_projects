import React from 'react'

function Card() {
  return (
    <div className=" m-20 bg-base-200 max-h-screen  ">
  <div className="hero-content flex gap-10 ">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" 
      className=" h-[400px] rounded-lg shadow-2xl
      "
    />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="bg-blue-700 text-white text-3xl">Get Started</button>
    </div>
  </div>
</div>



  )
}

export default Card
