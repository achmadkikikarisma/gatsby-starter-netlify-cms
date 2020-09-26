import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
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
    <section className="hero">
      <div className="container mt-5 pt-5">
        <div className="row mt-5 pt-5 justify-content-center">
          <div className="col-md-10 pt-5 text-center">
            <div className="d-block">
              <h1>
                Build the invaluable product
              </h1>
              <b>We Design and Development your ideas</b>
            </div>
            <a className="btn btn-hire">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="pricing pb-5">
      <div className="container">
        <div className="row row-card">
          <div className="col-md-12 mb-3 text-center">
            <h1>
              Services
            </h1>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                Product Design (UX/UI)
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                Web and Mobile Development
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                Grapich Design and Marketing
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 pt-5">
          <div className="col-md-5">
            <h4>
              Why Pexel Design?
            </h4>
            <span className="d-block">
              Pexel Design will help growth your business until success to getting your revenue and audience
            </span>
            <a className="mt-5">
              Hire Us
            </a>
          </div>
          <div className="col-md-1">
          </div>
          <div className="col-md-6">
            <ul class="list-unstyled">
              <li>
                <div className="d-flex align-items-start">
                  <p/>
                  <div className="d-block ml-3">
                    <b>24/7 Service Care</b>
                    <span>
                      Pexel Design will help you anytime if you need us<br/>
                      Don't hesitate to contact us we always for you 24/7
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex align-items-start">
                  <p/>
                  <div className="d-block ml-3">
                    <b>Consult Anytime</b>
                    <span>
                      If you confused with your product which you will build<br/>
                      Pexel Design will cover you until you get your goals and profit
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex align-items-start">
                  <p/>
                  <div className="d-block ml-3">
                    <b>Client Satisfaction</b>
                    <span>
                      Pexel Design is very customer Obsessed<br/>
                      We work until get client satisfaction
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    {/* <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
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
