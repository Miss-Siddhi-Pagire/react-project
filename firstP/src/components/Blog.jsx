import React from 'react'
import './Blog.css'

export const Blog = () => {
  return (
    <>

    <main>
        <section class="blog">
            <h1>Our Blog</h1>
            <p>Stay updated with the latest gardening tips, plant care guides, and nursery stories. Explore the world of greenery with our expert advice and inspiring ideas.</p>
            <img src="src\images\plantblog.jpg" alt="Blog Banner" class="banner"/>
            <div class="posts">
                <div class="post">
                    <img src="src\images\plantcare.jpg" alt="Blog Post 1"/>
                    <h3>5 Tips for Indoor Plant Care</h3>
                    <p>Learn how to keep your indoor plants healthy and thriving with these essential tips.</p>
                    <a href="#" class="read-more">Read More</a>
                </div>
                <div class="post">
                    <img src="src\images\balcony.jpg" alt="Blog Post 2"/>
                    <h3>Creating a Balcony Garden</h3>
                    <p>Transform your balcony into a green paradise with our step-by-step guide.</p>
                    <a href="#" class="read-more">Read More</a>
                </div>
                    <div class="post">
                    <img src="src\images\flowering.jpg" alt="Blog Post 3"/>
                    <h3>Flowering Plants for Your Garden</h3>
                    <p>Add color and fragrance to your garden with these beautiful flowering plants.</p>
                    <a href="#" class="read-more">Read More</a>
                </div>
            </div>
        </section>
    </main>
    </>
  )
}
