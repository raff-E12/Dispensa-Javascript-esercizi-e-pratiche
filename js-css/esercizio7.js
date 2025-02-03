addEventListener('DOMContentLoaded', function(){
    const ham_icon = this.document.getElementById('ham');
    const cross_icon = this.document.getElementById('cross');
    const menu_slide = this.document.getElementById('MenuMobile');

    this.window.addEventListener('resize', function(){
        if (this.window.matchMedia('(max-width:1200px)').matches) {
            ham_icon.style.display = 'block';
            cross_icon.style.display = 'none';
            menu_slide.style.left = '100%';
        } else {
            ham_icon.style.display = 'none';
            cross_icon.style.display = 'none';
            menu_slide.style.left = '100%';
        }
    })

    //this.window.matchMedia() = il metodo matchMedia corrisponde alle propreiatà dell'oggetto Mediaquerylist con usi di metodi e proprietà che fanno parte della mediaquery nel css.
    //matchMedia fa fasi che la il valore espresso cattura quella risoluzione di schermo desiderata.
    //invece la proprietà matches fasi che quella risoluzione schermo cattuarto venga verifica se e presente, se no è falso.


    ham_icon.addEventListener('click', function(){
        ham_icon.style.display = 'none';
        cross_icon.style.display = 'block';
        menu_slide.style.left = '0%';
    });


    cross_icon.addEventListener('click', function(){
        ham_icon.style.display = 'block';
        cross_icon.style.display = 'none';
        menu_slide.style.left = '100%';
    });
        
});