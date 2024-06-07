import React from 'react'

const darkStyle = {
    color: '#FFFFFF',
    background: '#333e50'
};
const lightStyle = {
    color: '#000000',
    background: '#f8f9fa'
};

export default function AboutChain() {
  return (
    <>
        <div style={lightStyle}>
            <div className="container p-4">
        {/* <!--Grid row--> */}
                <div className="row">
        {/*<!--Grid column-->*/}
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase" style={{textAlign: "left"}}>О нас</h5>
                    </div>
                </div>
                <p > </p>
                <div style={{textAlign: "left"}}>
                Сеть отелей «GrandChebebe» предлагает комфортное проживание в Санкт-Петербурге, 
                и в других городах России, по доступным ценам. Отели расположены в центре города, 
                что позволяет гостям быстро добраться до основных достопримечательностей. 
                В номерах есть всё необходимое: фен, утюг и стиральная машина. 
                Круглосуточная работа администраторов обеспечивает помощь и поддержку гостей. 
                Выбирайте нас для отдыха и работы, ведь мы предлагаем идеальное сочетание комфорта и удобства. 
                Наши отели станут вашим вторым домом вдали от дома, обеспечивая уютное пространство для релаксации и продуктивной деятельности.
                </div>
            </div>
        </div>
    </>
  )
}
