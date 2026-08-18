/* =====================================================
   NUEVAS SENDAS
   APP.JS
===================================================== */


/* =====================================================
   NAVBAR
===================================================== */

const nav = document.getElementById("nav");


function updateNavbar() {

    if (window.scrollY > 35) {

        nav.classList.add("scrolled");

    } else {

        nav.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    updateNavbar,
    {
        passive: true
    }
);


updateNavbar();



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {
            threshold: 0.12
        }

    );


document
    .querySelectorAll(".reveal")
    .forEach(
        (element) => {

            revealObserver.observe(
                element
            );

        }
    );



/* =====================================================
   DESTINATIONS DATA
===================================================== */

const destinations = {


    terraplen: {

        icon: "🌿",

        location:
            "GENERAL RODRIGUEZ · BUENOS AIRES",

        title:
            "Granja “El Terraplen”",

        description:
            "Un predio amplio, rodeado de espacios verdes, que permite vivir una experiencia auténtica de campamento en contacto con la naturaleza. El entorno natural genera una verdadera sensación de campamento, en un ambiente cuidado y organizado.",

        infrastructure: [

            "Un espacio cerrado con capacidad para 120 estudiantes.",

            "Amplias zonas verdes para grandes juegos y dinámicas grupales.",

            "Sector seguro para el armado de carpas.",

            "Un bosque ideal para jugar."

        ],

        experiences: [

            "Recorrido por el terraplén: aproximadamente 2 km para realizar una caminata grupal tipo “mini trekking”.",

            "El recorrido atraviesa campos vecinos donde es frecuente observar caballos, vacas y ovejas.",

            "Granja educativa disponible para ser visitada y recorrida por los grupos.",

            "Posibilidad de integrar contenidos trabajados en el aula con una experiencia concreta en territorio."

        ]

    },


    carmen: {

        icon: "🌊",

        location:
            "SANTA TERECITA · BUENOS AIRES",

        title:
            "Estancia El Carmen",

        description:
            "Predio ubicado en una zona privilegiada de Santa Teresita, con acceso directo a la playa. El complejo permite disfrutar del entorno costero de manera organizada y segura, combinando playa, mar y actividades grupales en un mismo espacio.",

        infrastructure: [

            "Predio completamente cercado.",

            "Quincho de uso exclusivo para el grupo.",

            "Sector de carpas seguro y arbolado.",

            "Baños y vestuarios con agua caliente 24hs.",

            "Opciones de alojamiento en carpas o cabañas con baño privado.",

            "La puerta de acceso a la playa permanece cerrada a partir de las 20 hs."

        ],

        experiences: [

            "Bicicleteada por Santa Teresita.",

            "Recorrido grupal por zonas seguras y paisajes característicos de la ciudad.",

            "Llegada al barco emblemático sobre la costanera.",

            "Regreso por la playa hasta el camping."

        ]

    },


    puerta: {

        icon: "🚣",

        location:
            "CHASCOMÚS · BUENOS AIRES",

        title:
            "Camping La Puerta",

        description:
            "Ubicado a 15 cuadras del centro de Chascomús y sobre la avenida costanera, el camping se encuentra frente a la laguna. La disposición del predio permite realizar actividades en el espacio verde frente al agua sin que el acceso a la laguna sea directo desde el complejo.",

        infrastructure: [

            "Quincho cerrado con capacidad para 200 personas.",

            "Baños y vestuarios con agua caliente 24hs.",

            "Complejo cercado.",

            "Amplio espacio verde para juegos y dinámicas grupales.",

            "Cancha de fútbol grande.",

            "Cancha de paddle.",

            "Cancha de vóley.",

            "Sector seguro y delimitado para armado de carpas.",

            "Espacio destinado a fogón.",

            "Habitaciones con 3 cuchetas, con capacidad máxima para 48 personas."

        ],

        experiences: [

            "Kayak en la laguna.",

            "Proveedor habilitado.",

            "Guardavidas presente durante la actividad.",

            "Organización y supervisión constante del grupo.",

            "Meriendas y atardeceres frente a la laguna."

        ]

    },


    foetra: {

        icon: "⛺",

        location:
            "EZEIZA · BUENOS AIRES",

        title:
            "FOETRA",

        description:
            "Acampamos en el complejo de FOETRA, ubicado a tan solo 30 km de la Ciudad de Buenos Aires, en Ezeiza, cercano al predio de AFA.",

        infrastructure: [

            "Espacios amplios y seguros para acampe.",

            "Grandes espacios verdes para dinámicas grupales.",

            "Sectores arbolados.",

            "Quincho de uso exclusivo para el grupo.",

            "Vestuarios con agua caliente 24hs.",

            "Servicio médico disponible las 24 hs."

        ],

        experiences: []

    },


    serranita: {

        icon: "🏔",

        location:
            "SIERRA DE LOS PADRES · BUENOS AIRES",

        title:
            "Complejo La Serranita",

        description:
            "Ubicado al pie de las Sierras de Colinas Verdes, el complejo La Serranita ofrece un predio de 150 hectáreas que permite desarrollar una experiencia integral en contacto con la naturaleza. El entorno combina sierra, bosque y espacios abiertos.",

        infrastructure: [

            "Predio de 150 hectáreas.",

            "Salón de usos múltiples (SUM).",

            "Vestuarios.",

            "Cancha de fútbol.",

            "Cancha de vóley.",

            "Sector exclusivo para fogón.",

            "Dos dormis con aire acondicionado, sanitarios completos y capacidad para 35 personas cada uno.",

            "Opciones de alojamiento en carpas, dormis o cabañas con baño privado.",

            "Cada grupo tiene su sector con acceso y uso exclusivo de salón, vestuarios y baños."

        ],

        experiences: [

            "Trekking en la sierra.",

            "Footgolf.",

            "Taller de arco y flecha.",

            "Escalada.",

            "Rappel.",

            "Parque aéreo.",

            "Tarde en Playa Grande, Mar del Plata, incluida en el valor del campamento.",

            "Clases de Surf en Playa Grande como opcional.",

            "Merienda en Manolo como opcional."

        ]

    },


    valle: {

        icon: "🏔",

        location:
            "SAN RAFAEL · MENDOZA",

        title:
            "Valle Grande",

        description:
            "Valle Grande ofrece un escenario natural imponente, con montañas, río y paisajes característicos del sur mendocino. Es un destino orientado a la aventura y al contacto directo con el entorno natural.",

        infrastructure: [

            "Rincón del Valle: cabañas para 6 personas con baño privado.",

            "Rincón del Valle: salón de usos múltiples.",

            "Rincón del Valle: restaurant.",

            "Rincón del Valle: amplio parque a orillas del Río Atuel.",

            "Rincón del Valle: pileta cercada.",

            "Rincón del Valle: complejo cercado.",

            "Camping El Sauce: salón cerrado para 60 personas.",

            "Camping El Sauce: baños y vestuarios con agua caliente.",

            "Camping El Sauce: pileta cercada.",

            "Camping El Sauce: predio completamente cercado.",

            "Camping El Sauce: 1000 metros de costa sobre el Río Atuel."

        ],

        experiences: [

            "Rafting en el Río Atuel.",

            "Trekking de medio día.",

            "Parque aéreo (Euca).",

            "Cruce y tarde en las playas del dique.",

            "Visita a bodega.",

            "Todas las actividades se organizan con proveedores habilitados.",

            "Posibilidad de viajar en avión con Aerolíneas Argentinas, sujeto a disponibilidad y condiciones."

        ]

    },


    archicampo: {

        icon: "🏹",

        location:
            "SAN PEDRO · BUENOS AIRES",

        title:
            "Archicampo",

        description:
            "Nos hospedamos en el complejo Archicampo, un espacio preparado para recibir grupos educativos en un entorno natural organizado y funcional. Combina infraestructura de calidad con propuestas de aventura y experiencias formativas vinculadas al contexto histórico de la región.",

        infrastructure: [

            "Complejo de uso exclusivo para el grupo.",

            "Dormis con aire acondicionado frío-calor.",

            "Salón de usos múltiples de 250 m² con hogar a leña.",

            "Sanitarios completos.",

            "Vestuarios.",

            "Sector de acampe.",

            "Sector de fogón.",

            "Piscina cercada.",

            "Espejo de agua dentro del predio."

        ],

        experiences: [

            "Tirolesa.",

            "Puentes colgantes.",

            "Palestra.",

            "Taller de arco y flecha.",

            "Visita a Vuelta de Obligado.",

            "Juegos en la playa y trabajo sobre la Batalla de la Vuelta de Obligado y la conmemoración de la Soberanía Nacional."

        ]

    },


    iguape: {

        icon: "🌴",

        location:
            "COLÓN · ENTRE RÍOS",

        title:
            "Iguapé Aparts",

        description:
            "Nos hospedamos en Iguapé Aparts, un complejo preparado para recibir grupos educativos en un entorno seguro, con infraestructura amplia y funcional. La infraestructura permite combinar actividades recreativas, deportivas y espacios de encuentro.",

        infrastructure: [

            "Predio de dos hectáreas totalmente cercado.",

            "Cámaras de seguridad.",

            "Cabañas con baño privado y aire acondicionado frío-calor.",

            "Amplio salón con capacidad para 120 personas.",

            "Canchas de fútbol y vóley.",

            "Amplio espacio verde para juegos y dinámicas grupales.",

            "Dos piscinas exteriores cercadas.",

            "Solarium de 250 m²."

        ],

        experiences: [

            "Visita y recorrida por el Parque Nacional El Palmar.",

            "Interpretación del entorno natural y trabajo sobre biodiversidad y ecosistema.",

            "Paseo en catamarán por el Río Uruguay.",

            "Navegación hasta el puente fronterizo con Uruguay.",

            "Cruce a la Isla Los Hornos.",

            "Caminata ambiental interpretativa.",

            "Tarde de playa y kayak.",

            "Actividad de kayak en el Parador de la Isla."

        ]

    }

};



/* =====================================================
   MODAL ELEMENTS
===================================================== */

const modal =
    document.getElementById(
        "destinationModal"
    );


const modalClose =
    document.getElementById(
        "modalClose"
    );


const modalIcon =
    document.getElementById(
        "modalIcon"
    );


const modalLocation =
    document.getElementById(
        "modalLocation"
    );


const modalTitle =
    document.getElementById(
        "modalTitle"
    );


const modalDescription =
    document.getElementById(
        "modalDescription"
    );


const modalInfrastructure =
    document.getElementById(
        "modalInfrastructure"
    );


const modalExperiences =
    document.getElementById(
        "modalExperiences"
    );



/* =====================================================
   OPEN MODAL
===================================================== */

function openDestination(
    destinationId
) {

    const destination =
        destinations[
            destinationId
        ];


    if (!destination) {

        return;

    }


    modalIcon.textContent =
        destination.icon;


    modalLocation.textContent =
        destination.location;


    modalTitle.textContent =
        destination.title;


    modalDescription.textContent =
        destination.description;


    modalInfrastructure.innerHTML =
        "";


    destination.infrastructure
        .forEach(
            item => {

                const li =
                    document.createElement(
                        "li"
                    );

                li.textContent =
                    item;

                modalInfrastructure
                    .appendChild(li);

            }
        );


    modalExperiences.innerHTML =
        "";


    if (
        destination.experiences.length === 0
    ) {

        const li =
            document.createElement(
                "li"
            );

        li.textContent =
            "El material proporcionado no detalla experiencias específicas para este destino.";

        modalExperiences
            .appendChild(li);

    } else {

        destination.experiences
            .forEach(
                item => {

                    const li =
                        document.createElement(
                            "li"
                        );

                    li.textContent =
                        item;

                    modalExperiences
                        .appendChild(li);

                }
            );

    }


    modal.classList.add(
        "open"
    );


    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";

}



/* =====================================================
   CLOSE MODAL
===================================================== */

function closeDestination() {

    modal.classList.remove(
        "open"
    );


    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";

}


modalClose.addEventListener(
    "click",
    closeDestination
);


document
    .querySelector(".modal-overlay")
    .addEventListener(
        "click",
        closeDestination
    );


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeDestination();

        }

    }
);



/* =====================================================
   DESTINATION BUTTONS
===================================================== */

document
    .querySelectorAll(
        ".destination-btn"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const id =
                        button.dataset.destination;

                    openDestination(id);

                }
            );

        }
    );



/* =====================================================
   DESTINATION FILTERS
===================================================== */

const filterButtons =
    document.querySelectorAll(
        ".filter-btn"
    );


const destinationCards =
    document.querySelectorAll(
        ".destination-card"
    );


filterButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                const filter =
                    button.dataset.filter;


                filterButtons.forEach(
                    btn => {

                        btn.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                destinationCards.forEach(
                    card => {

                        const province =
                            card.dataset.province;


                        if (
                            filter === "todos" ||
                            province === filter
                        ) {

                            card.style.display =
                                "";

                            setTimeout(
                                () => {

                                    card.style.opacity =
                                        "1";

                                    card.style.transform =
                                        "translateY(0)";

                                },
                                10
                            );

                        } else {

                            card.style.opacity =
                                "0";

                            card.style.transform =
                                "translateY(15px)";

                            setTimeout(
                                () => {

                                    card.style.display =
                                        "none";

                                },
                                250
                            );

                        }

                    }
                );

            }
        );

    }
);



/* =====================================================
   SMOOTH NAVIGATION
===================================================== */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(
        link => {

            link.addEventListener(
                "click",
                event => {

                    const targetId =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        targetId === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) {

                        return;

                    }


                    event.preventDefault();


                    const navHeight =
                        nav.offsetHeight;


                    const targetPosition =
                        target.offsetTop -
                        navHeight -
                        15;


                    window.scrollTo({

                        top:
                            targetPosition,

                        behavior:
                            "smooth"

                    });

                }
            );

        }
    );