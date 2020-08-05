import React from "react"

import "./styles.css"
import whatsappIcon from "../../assets/images/icons/whatsapp.svg"

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img
                    src="https://media-exp1.licdn.com/dms/image/C4D03AQHomUg6JHirQA/profile-displayphoto-shrink_100_100/0?e=1602115200&v=beta&t=gmQpcXdCO3O9CVMJB_laGb3-iEItpYWwk5h_KmVNCys"
                    alt="Teacher"
                />
                <div>
                    <strong>Volnei alves</strong>
                    <span>Programação</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de programação avançada.
                <br />
                <br />
                Apaixonado por programação e por mudar a vida das pessoas
                através de experiências. Mais de 200 pessoas já passaram por uma
                das minhas experiências.
            </p>
            <footer>
                <p>
                    Preço/Hora <strong>R$ 38,50</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}
export default TeacherItem
