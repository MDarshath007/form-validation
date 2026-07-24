function DesktopDesign() {
  return (
    <div className="desktop-view-design p-5">
        <h1 className="mb-5 text-primary">
          <span className="bi bi-shield-shaded text">
            {" "}
            <span className="text-white">Form</span>
          </span>
          Validate
        </h1>
        <h1>Create your</h1>
        <h1 className="text-primary">account</h1>
        <p className="my-4">
          Join thousands of users and enjoy a seamless experience.
        </p>
        <div className="features">
          <div className="feature-card d-flex align-items-center my-5">
            <i className="bi bi-shield-lock bg bg-primary px-3 py-2 me-3 rounded-5 fs-2"></i>
            <div className="feauter-info">
              <h5>Secure & Private</h5>
              <p>Your data is protected with enterprise-grade security.</p>
            </div>
          </div>
          <div className="feature-card d-flex align-items-center my-5">
            <i className="bi bi-lightning-charge bg bg-primary px-3 py-2 me-3 rounded-5 fs-2"></i>
            <div className="feauter-info">
              <h5>Fast & Secure</h5>
              <p>Quick sign up process to get you started.</p>
            </div>
          </div>
          <div className="feature-card d-flex align-items-center my-5">
            <i className="bi bi-people bg bg-primary px-3 py-2 me-3 rounded-5 fs-2"></i>
            <div className="feauter-info">
              <h5>User Friendly</h5>
              <p>Designed for a smooth and intuitive experience.</p>
            </div>  
          </div>
        </div>
      </div>
  )
}

export default DesktopDesign
