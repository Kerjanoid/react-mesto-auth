import Header from "./Header"
import { Link, Redirect } from "react-router-dom"

function Register() {
  return (
    <>
    <Header
      buttonText="Войти"
      mailHandler=""
      linkHandler={"/sign-in"}
      buttonClass=""
    />
    <section className="register">
      <h2 className="popup__title register__title">Регистрация</h2>
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
        <button type="submit" className="popup__submit-button register__button" aria-label="Зарегистрироваться">Зарегистрироваться</button>
      </form>
      <div className="register__login">
        <p className="register__login-text">Уже зарегистрированы?&nbsp;</p>
        <Link to="/sign-in" className="register__link">Войти</Link>
      </div>
    </section>
    </>
  )
}

export default Register
