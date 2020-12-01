const pageType = document.getElementsByName("current-page");
const navItemHarry = document.getElementById("harry");
const navItemOtros = document.getElementById("otros");

console.log('pageType[0].value', pageType[0].value);
console.log('navItemHarry', navItemHarry);
console.log('navItemOtros', navItemOtros);

/* 
    Añadimos la clase Current-page para mostrar  al
    usuario la sección en la que está
*/
switch (pageType[0].value) {
    case 'detail-harry':
    case 'harry':
        navItemHarry.className = 'current-page';
        break;
    case 'detail-otros':
    case 'otros':
        navItemOtros.className = 'current-page';
        break;

    default:
        /* Index */
        break;
}