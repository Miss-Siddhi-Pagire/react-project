import React from 'react'
import './Explore.css'

const Explore = () => {
  return (
    <>
                <main>
                    <section class="explore">
                        <h1>Explore Our Collection</h1>
                        <p>Discover a wide range of plants, flowers, and gardening tools perfect for your garden. Browse through categories of indoor plants, outdoor plants, succulents, and more!</p>
                        <img src="src\images\explore.jpg" alt="Explore Banner" class="banner"/>
                        <div class="grid">
                                <div class="card">
                                    <img src="src\images\indoorplant.jpg" alt="Plant 1"/>
                                    <h3>Indoor Plants</h3>
                                    <p>Perfect for your home interiors with low maintenance needs.</p>
                                </div>

                                <div class="card">
                                    <img src="src\images\outdoorplant.jpg" alt="Plant 2"/>
                                    <h3>Outdoor Plants</h3>
                                    <p>Add charm to your garden with a variety of outdoor options.</p>
                                </div>
                                <div class="card">
                                    <img src="src\images\succulant.jpg" alt="Plant 3"/>
                                    <h3>Succulents</h3>
                                    <p>Beautiful, drought-resistant plants for unique aesthetics.</p>
                                </div>
                                <div class="card">
                                    <img src="src\images\herbplant.jpg" alt="Plant 4"/>
                                    <h3>Herbs</h3>
                                    <p>Fresh and aromatic herbs for your kitchen and garden.</p>
                                </div>
                        </div>
                    </section>
            </main>

    </>
  )
}

export default  Explore