import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'
import pattern from '../img/new-pattern.svg'
import team from '../img/team.svg'
import team2 from '../img/team2.svg'
import design from '../img/design.svg'
import marketing from '../img/marketing.svg'
import branding from '../img/branding.svg'
import software from '../img/software.svg'
import illustration from '../img/illustration.svg'
import bgSpace from '../img/19333449.png'
import shoe from '../img/shoe_commerce.png'
import wallet from '../img/wallet_all.png'
import estate from '../img/real_estate.png'
import planet from '../img/planet.png'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

// import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <Fragment>
    <section
      className="hero py-5">
      {/* <div className="container-fluid hero-container">
        <div style={{
            background: `url(${bgSpace})`,
            height: '500px',
            backgroundSize: 'contain',
            width: '100%',
          }} 
          className="row">
          <div className="col-md-12"></div>
        </div>
      </div> */}
      <div className="container-fluid pt-5">
        <div className="row hero-descriptions">
          <div className="col-md-3">
            <h1>Design</h1>
            <h4>Design an invaluable product</h4>
            <span className="text-muted d-inline-block mb-4">
              Lorem Ipsum is simply dummy text of the printing
            </span>
            <a className="btn btn-design">
              More <i className="ml-2 la la-arrow-right"></i>
            </a>
          </div>
          <div className="col-md-3">
            <h1>Branding</h1>
            <h4>Brand unique internet product</h4>
            <span className="text-muted d-inline-block mb-4">
              Lorem Ipsum is simply dummy text of the printing
            </span>
            <a className="btn btn-branding">
              More <i className="ml-2 la la-arrow-right"></i>
            </a>
          </div>
          <div className="col-md-3">
            <h1>Marketing</h1>
            <h4>Create product market fit</h4>
            <span className="text-muted d-inline-block mb-4">
              Lorem Ipsum is simply dummy text of the printing
            </span>
            <a className="btn btn-marketing">
              More <i className="ml-2 la la-arrow-right"></i>
            </a>
          </div>
          <div className="col-md-3">
            <h1>Software</h1>
            <h4>Create an impactful software</h4>
            <span className="text-muted d-inline-block mb-4">
              Lorem Ipsum is simply dummy text of the printing
            </span>
            <a className="btn btn-software">
              More <i className="ml-2 la la-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="workflow">
      <div className="container-fluid">
        <div className="row py-5 row-workflow">
          <div className="col-md-12">
            <div className="row row-content py-5 justify-content-center">
              <div className="col-md-6">
                <h2>
                  Product Workflow Development
                </h2>
                {/* <span>
                  1
                </span> */}
              </div>
            </div>
            <div className="row row-content justify-content-center">
              <div className="col-md-10">
                <span className="step">1</span>
                <p className="text-muted d-block mt-3">Fast to build</p>
                <h1 className="mt-3">
                  Create a complete website in the time <br/>it usually takes to build a prototype
                </h1>
                <span className="text-muted mt-4 d-block">
                  Build sites with the services you want, like Shopify, Stripe, and WordPress, quickly and <br/> 
                  easily with Gatsby’s 2000+ plugins. Integrate data from anywhere: APIs, databases, <br/> CMSs, static files — or multiple sources at once.
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row row-content py-5 justify-content-center">
              <div className="col-md-6"></div>
            </div>
            <div className="row row-content py-5 justify-content-center">
              <div className="col-md-10">
                <span className="step">2</span>
                <p className="text-muted d-block mt-3">Fast to run</p>
                <h1 className="mt-3">
                  Gatsby sites are 
                  <br/>
                  fast by design
                </h1>
                <span className="text-muted mt-4 d-block">
                  Gatsby loads only critical 1 parts of the page, so your site loads as fast as possible. Once 
                  <br/>
                  loaded, Gatsby prefetches 2 resources for other pages so that clicking on the site feels<br/> 
                  incredibly fast. Gatsby lets teams focus on creating content-driven websites instead of <br/>
                  worrying about performance.
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row row-content py-5 justify-content-center">
              <div className="col-md-6"></div>
            </div>
            <div className="row row-content py-5 justify-content-center">
              <div className="col-md-10">
                <span className="step">3</span>
                <p className="text-muted d-block mt-3">Fast to deploy</p>
                <h1 className="mt-3">
                  Gatsby sites build fast
                  <br/>no matter where they’re deployed.
                </h1>
                <span className="text-muted mt-4 d-block">
                  Gatsby ships with a sophisticated caching and dependency tracking system we’ve spent <br/>years perfecting. Gatsby intelligently avoids re-executing redundant parts of the build so<br/> that sites build and deploy, on average, 2.5x faster than other static frameworks.
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row row-content py-5 justify-content-center">
              <div className="col-md-6"></div>
            </div>
            <div className="row row-content py-5 justify-content-center">
              <div className="col-md-10">
                <span className="step">3</span>
                <p className="text-muted d-block mt-3">Fast to deploy</p>
                <h1 className="mt-3">
                  Gatsby sites build fast
                  <br/>no matter where they’re deployed.
                </h1>
                <span className="text-muted mt-4 d-block">
                  Gatsby ships with a sophisticated caching and dependency tracking system we’ve spent <br/>years perfecting. Gatsby intelligently avoids re-executing redundant parts of the build so<br/> that sites build and deploy, on average, 2.5x faster than other static frameworks.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="portfolio py-5">
      <div className="container-fluid">
        <div className="row mb-3">
          <div className="col-md-12">
            <h2>
              Portfolio
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="portfolio-item">
              <img className="img-fluid" src={shoe}/>
              <div className="portfolio-item-content p-3">
                <h4>Shoe Commerce</h4>
                <span className="text-muted">
                  Gatsby ships with a sophisticated caching and dependency tracking system
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="portfolio-item">
              <img className="img-fluid" src={wallet}/>
              <div className="portfolio-item-content p-3">
                <h4>Ewallet Concept</h4>
                <span className="text-muted">
                  Gatsby ships with a sophisticated caching and dependency tracking system
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="portfolio-item">
              <img className="img-fluid" src={estate}/>
              <div className="portfolio-item-content p-3">
                <h4>Real Estate</h4>
                <span className="text-muted">
                  Gatsby ships with a sophisticated caching and dependency tracking system
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="portfolio-item">
              <img className="img-fluid" src={planet}/>
              <div className="portfolio-item-content p-3">
                <h4>Planet</h4>
                <span className="text-muted">
                  Gatsby ships with a sophisticated caching and dependency tracking system
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="testimonial py-5">
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>Client who trust us</h2>
          </div>
        </div>
        <div className="row mt-5 justify-content-center">
          <div className="col-md-8">
            <Slider {...settings}>
              <div className="testimonial-item text-center pt-4 pb-2">
                <h5>Harsono</h5>
                <h3>
                  With Gatsby we immediately saw a 2x boost in site performance with a 10x increase in page load speeds. As a result, we’ve definitely seen a decrease in the bounce rate and an increase in our conversion rate.
                </h3>
                <span className="text-muted">Indonesia</span>
              </div>
              <div className="testimonial-item text-center pt-4 pb-2">
                <h5>Darmono</h5>
                <h3>
                  Gatsby is a really important differentiator for us. As a small boutique agency, having Gatsby is like having a secret weapon.
                </h3>
                <span className="text-muted">Indonesia</span>
              </div>
              <div className="testimonial-item text-center pt-4 pb-2">
                <h5>Wibowo</h5>
                <h3>
                  I’m blown away by how fast Gatsby is for the user.
                </h3>
                <span className="text-muted">Indonesia</span>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  </Fragment>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
