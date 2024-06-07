import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function FormLogIn() {
  return (
    <div>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email адрес</Form.Label>
        <Form.Control type="email" placeholder="Введите email" />
        <Form.Text className="text-muted">
          Личные данные хранятся на сервере и никуда не передаются
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control type="password" placeholder="Введите пароль" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Пока что просто галочка" />
      </Form.Group>
      <Link style={{ textDecoration: 'none' }} to="/Personal"> 
      {/*// ПРОООООСТО ЖЕСТЬ ССЫЛКА ОБОРАЧИВАЕТ КНОПКУ*/}
      <Button variant="primary" type="submit">Войти</Button>
      </Link>
    </Form>
    </div>
  );
}

export default FormLogIn;