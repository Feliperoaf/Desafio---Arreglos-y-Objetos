const propiedadesVenta = [
    {
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        titulo: "Apartamento de lujo en zona exclusiva",
        texto: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        direccion: "123 Luxury Lane, Prestige Suburb, CA 45678",
        habitaciones: "4",
        baños: "4",
        precio: 5000,
        smoke: false,
        pet: false
    },
    {
        src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        titulo: "Apartamento acogedor en la montaña",
        texto: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
        direccion: "789 Mountain Road, Summit Peaks, CA 23456",
        habitaciones: "2",
        baños: "1",
        precio: 1200,
        smoke: true,
        pet: true
    },
    {
        src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        titulo: "Penthouse de lujo con terraza panorámica",
        texto: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
        direccion: "567 Skyline Avenue, Skyview City, CA 56789",
        habitaciones: "3",
        baños: "3",
        precio: 4500,
        smoke: false,
        pet: true
    },
    {
        src: "https://plus.unsplash.com/premium_photo-1672252617591-cfef963eeefa?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        titulo: "Casa de campo con piscina",
        texto: "Espaciosa casa de campo con piscina y amplios jardines, perfecta para relajarse.",
        direccion: "890 Countryside Lane, Serene Village, CA 67890",
        habitaciones: "5",
        baños: "4",
        precio: 6000,
        smoke: false,
        pet: true
    },
    {
        src: "https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=2856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        titulo: "Chalet con vistas al lago",
        texto: "Encantador chalet con impresionantes vistas al lago y acceso privado.",
        direccion: "456 Lakeside Drive, Tranquil Town, CA 34567",
        habitaciones: "3",
        baños: "2",
        precio: 3800,
        smoke: true,
        pet: false
    },
    {
        src: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        titulo: "Apartamento moderno en el centro",
        texto: "Moderno apartamento en el corazón de la ciudad, cerca de comercios y restaurantes.",
        direccion: "234 City Center, Urban District, CA 12345",
        habitaciones: "1",
        baños: "1",
        precio: 1500,
        smoke: false,
        pet: true
    }
];


const propiedadesAlquiler = [
    {
        src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
        titulo: "Apartamento en el centro de la ciudad",
        texto: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
        direccion: "123 Main Street, Anytown, CA 91234",
        habitaciones: "2",
        baños: "2",
        precio: 2000,
        smoke: false,
        pet: true
    },
    {
        src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        titulo: "Apartamento luminoso con vista al mar",
        texto: "Este hermoso apartamento ofrece una vista impresionante al mar.",
        direccion: "456 Ocean Avenue, Seaside Town, CA 56789",
        habitaciones: "3",
        baños: "3",
        precio: 2500,
        smoke: true,
        pet: true
    },
    {
        src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        titulo: "Condominio moderno en zona residencial",
        texto: "Este elegante condominio moderno está ubicado en una tranquila zona residencial.",
        direccion: "123 Main Street, Anytown, CA 91234",
        habitaciones: "2",
        baños: "2",
        precio: 2200,
        smoke: false,
        pet: false
    },
    {
        src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=750&q=80",
        titulo: "Apartamento amplio en el centro histórico",
        texto: "Este apartamento ofrece un amplio espacio y está situado en el encantador centro histórico.",
        direccion: "789 History Lane, Old Town, CA 12345",
        habitaciones: "3",
        baños: "2",
        precio: 2800,
        smoke: false,
        pet: true
    },
    {
        src: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=750&q=80",
        titulo: "Estudio moderno cerca del parque",
        texto: "Este moderno estudio está perfectamente ubicado cerca de un hermoso parque.",
        direccion: "456 Parkside Avenue, Green City, CA 67890",
        habitaciones: "1",
        baños: "1",
        precio: 1800,
        smoke: true,
        pet: false
    },
    {
        src:"https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        titulo: "Loft industrial en zona artística",
        texto: "Un loft industrial espacioso en una vibrante zona artística, perfecto para creativos.",
        direccion: "123 Art District, Creative City, CA 34567",
        habitaciones: "1",
        baños: "1",
        precio: 2300,
        smoke: false,
        pet: true
    }
];



const generarGaleria = (id, name, limite = name.length) => {

    const propGaleria = document.querySelector(id)
    let html = "";

    for (let i = 0; i < name.length && i < limite; i++) {
        const elemen = name[i];
    html += /*html*/`
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${elemen.src}" class="card-img-top" alt="Imagen del departamento"/>
                <div class="card-body">
                <h5 class="card-title">${elemen.titulo}</h5>
                <p class="card-text">${elemen.texto}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${elemen.direccion}</p>
                <p>
                    <i class="fas fa-bed"></i> ${elemen.habitaciones} Habitaciones |
                    <i class="fas fa-bath"></i> ${elemen.baños} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i>${elemen.precio}</p>
            
                ${elemen.smoke ? 
                    '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' 
                : 
                    '<p class="text-danger"> <i class="fas fa-smoking-ban"></i> No se permite fumar</p>'}
            
                ${elemen.pet ? 
                    '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' 
                : 
                    '<p class="text-danger"> <i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'}
                </div>
            </div>
        </div>
    `;
    }
    propGaleria.innerHTML = html;
}

generarGaleria("#ventaBox", propiedadesVenta, 3);
generarGaleria("#alquilerBox", propiedadesAlquiler, 3);