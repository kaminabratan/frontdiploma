import Carousel from 'react-bootstrap/Carousel';

function Gallery() {
  return (
    <Carousel data-bs-theme="light" className='pt-10'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../exmp.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Расположение</h5>
          <p>Наши отели находятся в самом сердце города</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../secondimg.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Уют</h5>
          <p>В стенах наших отелей вы обретёте новый дом</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../thirdimg.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Доверие</h5>
          <p>
            Множество положительных отзывов доказывают наши слова
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Gallery;