import Form from 'react-bootstrap/Form';

function Select() {
  return (
    <Form.Select aria-label="Default select example">
      <option>Все отели</option>
      <option value="1">Grand Chebebe BM</option>
      <option value="2">Grand Chebebe Pulkovo</option>
    </Form.Select>
  );
}

export default Select;