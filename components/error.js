import Router from 'next/router'

export default () => (
  <section id="error" className="error user-body">
    <div>
      <div className="error-container">
        <p>Error</p>
        <button
          onClick={() => Router.push('/firstassignment')}
        >Go home</button>
      </div>
    </div>
  </section>
)