<!-- Contact form start -->
<section class="section_part">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-9">
                <div class="row">
                    <div class="col-md-12" data-aos="fade-up">
                        <h2 class="text-azulmarino text-40">Contáctanos <br>
                            <span class="text-azulclaro text-30">Queremos saber sobre ti</span>
                        </h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div id="contact-form" class="wow fadeIn first">
                            <form id="contactForm" data-toggle="validator">
                            <div class="form-group row">
                                <div class="col-md-12 form-group input-group" data-aos="flip-left">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text background-verde"><i class="text-white fas fa-user"></i></span>
                                    </div>
                                    <input type="text" class="form-control" name="name" id="name" onfocus="this.placeholder = 'Escribe tu nombre*'" onblur="this.placeholder = 'El nombre es obligatorio*'" placeholder="Nombre completo*" required>
                                    <div class="help-block with-errors text-danger"></div>
                                </div>
                                <div class="col-md-6 form-group input-group" data-aos="flip-right">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text background-verde"><i class="text-white fas fa-envelope"></i></span>
                                    </div>
                                    <input type="email" class="form-control" name="email" id="email" onfocus="this.placeholder = 'Escribe tu e-mail*'" onblur="this.placeholder = 'El e-mail es obligatorio*'" placeholder="E-mail*" required>
                                    <div class="help-block with-errors text-danger"></div>
                                </div>
                                <div class="col-md-6 form-group input-group" data-aos="flip-right">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text background-verde"><i class="text-white fas fa-phone-alt"></i></span>
                                    </div>
                                    <input type="tel" class="form-control" name="tel" id="tel" onfocus="this.placeholder = 'Escribe tu teléfono (10 digitos)*'" onblur="this.placeholder = 'El teléfono es obligatorio*'" placeholder="Teléfono (10 digitos)*" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required>
                                    <div class="help-block with-errors text-danger"></div>
                                </div>
                                <div class="col-md-12 form-group" data-aos="flip-up">
                                    <div class="form-group">
                                        <textarea class="form-control" name="message" id="message" onfocus="this.placeholder = 'Escribe el mensaje*'" onblur="this.placeholder = 'El mensaje es obligatorio*'" placeholder="Mensaje*" required></textarea>
                                        <div class="help-block with-errors text-danger"></div>
                                        <div id="msgSubmit" class="h5 text-center hidden"></div>
                                    </div>
                                    <p>*Campos obligatorios</p>
                                </div>
                                <div class="col-md-12" data-aos="fade-down">
                                    <div class="d-flex form-group justify-content-left">
                                        <button class="btn px-5 background-azulclaro text-white" id="form-submit" type="submit">Enviar</button>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</section>
<!-- Contact form end -->