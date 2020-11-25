import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'
import pattern from '../img/new-pattern.svg'
import team from '../img/team.svg'
// import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'

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
   <section className="one">
     <div className="container">
       <div className="row py-5 mt-5">
         <div className="col-md-5">
           <div className="d-block mt-5 position-relative">
            {/* <span className="first-pattern"></span> */}
            {/* <span className="second-pattern"></span> */}
            {/* <span className="third-pattern"></span> */}
            <div className="one-content pt-5">
              <h1 className="font-weight-bold mt-3 mb-2 digital-agency">
                Digital <br/>Agency
              </h1>
              <span className="text-muted d-inline-block mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
              </span>
              <Link className="btn btn-orange" to="/contact">
                Get Started
              </Link>
            </div>
           </div>
         </div>
       </div>
      <img className="img-fluid img-pattern" src={pattern}/>
     </div>
   </section>
   <section className="two py-5">
     <div className="container pt-5">
       <div className="row pt-5">
         <div className="col-md-3">
           <div className="card">
             <div className="card-body">
               <h4>Design</h4>
               <span className="text-muted d-inline-block mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
              </span>
             </div>
           </div>
         </div>
         <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h4>Branding</h4>
                <span className="text-muted d-inline-block mb-4">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                </span>
              </div>
            </div>
         </div>
         <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h4>Marketing</h4>
                <span className="text-muted d-inline-block mb-4">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                </span>
              </div>
            </div>
         </div>
         <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h4>Software</h4>
                <span className="text-muted d-inline-block mb-4">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                </span>
              </div>
            </div>
         </div>
       </div>
     </div>
   </section>
   <section className="three d-flex position-relative">
     <img className="team" src={team} />
     <div className="container mt-5 py-5">
       <div className="row mb-5">
         <div className="col-md-6">
           <h4>
            We Craft Experiences For Business To Help Rach Our Customers
           </h4>
           <span className="text-muted d-inline-block mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
           </span>
            <Link className="btn btn-orange" to="/contact">
              Get Started
            </Link>
         </div>
       </div>
       
     </div>
   </section>
   <section className="four position-relative">
     <div className="container mt-5">
      <div className="row pt-5 mt-5">
        <div className="col-md-5">
          <h4>
          Business Has Only Two Functions - Marketing And Innovation
          </h4>
          <span className="text-muted d-inline-block mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
          </span>
          <Link className="btn btn-orange" to="/contact">
          Get Started
          </Link>
        </div>
        <div className="col-md-7">
        </div>
      </div>
     </div>
   </section>
   
   <section className="five">
     <div className="container mt-5 pt-5">
       <div className="row mt-5 py-5">
         <div className="col-md-12 text-center">
           <h4>
             What Our Client Says
           </h4>
           <span className="text-muted d-inline-block mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>Lorem Ipsum has been the industry's standard dummy
           </span>
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
