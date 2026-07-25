function AccountCreated() {
  return (
    <div className="sign-up-success bg-white text-dark p-5 text-center d-flex flex-column justify-content-center">
      <span className="suc">
        <i className="fa-solid fa-circle-check"></i>
      </span>
      <br />
      <h2>Account Created!</h2>
      <p>Congratulations! Your account has been successfully created.</p>
    </div>
  );
}
export default AccountCreated;
