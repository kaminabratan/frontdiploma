import Container from "react-bootstrap/Container";

const bgColors = { 
    "Default": "#81b71a",
    "Blue": "#00B1E1",
    "Cyan": "#37BC9B",
    "Green": "#8CC152",
    "Red": "#E9573F",
    "Yellow": "#F6BB42",
    "Dark": "#333e50",
    "White": "#FFFFFF"
}

function Footer(){
    return (
    <footer className="bg-body-tertiary text-center text-sm-start">
    {/*<!-- Grid container -->*/}
    <div className="container p-4">
         {/* <!--Grid row--> */}
        <div className="row">
        {/*<!--Grid column-->*/}
        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Контакты</h5>

            <p>Юр. адрес: 196128, Россия, г. Санкт-Петербур, ул. Пушкина, д. Колотушкина</p>
            <p>+7 800 222 7777</p>
        </div>
        {/*<!--Grid column-->*/}

        {/*<!--Grid column-->*/}
        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">&#x200b;</h5>
            <p>Мы принимаем</p>
            <p><img src="../../mir.png" /><img src="../../unionpay.png"/><img src="../../amex.png" /></p>
        </div>
        {/*<!--Grid column-->*/}
        </div>
        {/*<!--Grid row-->*/}
    </div>
    {/*<!-- Grid container -->*/}

    {/*<!-- Copyright -->*/}
    <div className="text-center p-3" style={{backgroundColor: bgColors.Dark, color: bgColors.White}}>
        <a>© 2024 Copyright: Grand Chebebe</a>
    </div>
    {/*<!-- Copyright -->*/}
    </footer>
    )
}

export default Footer;