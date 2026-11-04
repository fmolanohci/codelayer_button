import { Button } from "./Button";
import { TextField } from "./TextField";
import "./LoginForm.css";

export function LoginForm() {
  return (
    <section className="login-form" aria-labelledby="login-form-title">
      <h1 className="login-form__title" id="login-form-title">
        TOMADO DIRECTAMENTE DE LOCAL
      </h1>
      <form className="login-form__form">
        <div className="login-form__fields">
          <TextField id="name" name="name" label="Name" placeholder="Tu nombre" autoComplete="name" />
          <TextField
            id="email"
            name="email"
            type="email"
            label="Email"
            placeholder="nombre@ejemplo.com"
            autoComplete="email"
          />
        </div>
        <div className="login-form__actions">
          <Button>Log in</Button>
          <Button variant="secondary">Crear cuenta</Button>
        </div>
      </form>
    </section>
  );
}
