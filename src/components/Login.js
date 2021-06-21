import Header from "./Header"

function Login() {
  return (
    <>
    <Header
      buttonText="Регистрация"
      mailHandler=""
      linkHandler={"/sign-up"}
      buttonClass=""
    />
    <section className="register">
      <h2 className="popup__title register__title">Вход</h2>
      <form className="popup__form register__form">
          <input
            required
            name="email"
            type="email"
            className="register__input-field register__input-field_type_email"
            placeholder="Email"
            minLength="7"
            maxLength="40"
          // value={data.username} onChange={handleChange}
          />
          <input
            required
            name="password"
            type="password"
            className=" register__input-field register__input-field_type_password"
            placeholder="Пароль"
            minLength="5"
            maxLength="40"
            // value={data.password} onChange={handleChange}
          />
        <button type="submit" className="popup__submit-button register__button register__button_signin" aria-label="Войти">Войти</button>
      </form>
    </section>
    </>
  )
}

export default Login
