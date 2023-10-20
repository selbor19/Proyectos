class Menu extends HTMLElement {
    constructor(){
        super();
        this.innerHTML = '
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">SAR <i class='bx bxs-home'></i>- Sistema Administrativo de Renta</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <div class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.html">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Inquilinos.html">Inquilinos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Propiedades.html">Propiedades</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Colaboradores</a>
                    </li>
                    </ul>
                </div>
            </div>
    </nav>
    <div class="container">
        <div class="container my-3">
            <div class="row">
                <div class="row">
                    <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">

                    </div>
                    <div class="col-sm-12 col-md-8 col-lg-8 col-xl-8">

                    </div>
                </div>
            </div>
        </div>
    </div>
        ';}
    }
}

customElements.define('menu-component', Menu);
