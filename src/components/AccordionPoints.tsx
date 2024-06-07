import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';


function AccordionPoints() {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen >
      <Accordion.Item eventKey="0">
        <Accordion.Header>Ничего</Accordion.Header>
        <Accordion.Body>
          <h4>Выберите категорию и отель для анализа</h4>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Номера</Accordion.Header>
        <Accordion.Body>
          <ul>
          <li><Link to="/RoomsPeakSeasonPage" style={{textDecoration: 'none'}}>Вычисление пикового сезона</Link></li>
          <li><Link to="/RoomsPopularityPage" style={{textDecoration: 'none'}}>Анализ популярности номеров</Link></li>
          <li><Link to="/RoomsDurationPage" style={{textDecoration: 'none'}}>Оценка продолжительности проживания</Link></li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Персонал</Accordion.Header>
        <Accordion.Body>
        <ul>
          <li><Link to="/StaffPerfomancePage" style={{textDecoration: 'none'}}>Оценка работы персонала (по отзывам)</Link></li>
        </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Сервисы</Accordion.Header>
        <Accordion.Body>
          <ul>
           <li><Link to="/ServicesTogetherPage" style={{textDecoration: 'none'}}>Сервисы, которые берут вместе чаще (реже) всего</Link></li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Гости</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li><Link to="/GuestsNoServicePage" style={{textDecoration: 'none'}}>Вывод гостей не приобритавших некоторую услугу (для предложения этой услуги)</Link></li>
            <li><Link to="/GuestsSpecialOfferPage" style={{textDecoration: 'none'}}>Вывод гостей для спецпредложения</Link></li>
            <li><Link to="/GuestsAgePage" style={{textDecoration: 'none'}}>Анализ возрастной категории</Link></li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionPoints;