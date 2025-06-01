import Swal from 'sweetalert2'

export function dispararSweet(title, text, icon, confirm){
    Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonText: confirm
})

}