import { SweetAlertOptions, SweetAlertResult } from "sweetalert2";
import swal from 'sweetalert2';

export function formatDate(_date: Date | string, format = null): string {
	const date = _date instanceof Date ? _date : new Date(_date);

	const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(),
		month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1,
		year = date.getFullYear();

	const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(),
		minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

	let formatDate;

	switch (format) {
		case "Y-m-d H:i":
			formatDate = `${year}-${month}-${day} ${hour}:${minutes}`;
			break;

		case "Y-m-d":
			formatDate = `${year}-${month}-${day}`;
			break;

		case "Y/m/d":
			formatDate = `${year}/${month}/${day}`;
			break;

		default:
			formatDate = `${day}/${month}/${year} ${hour}:${minutes}`;
			break;
	}

	return formatDate;
}

export function formatTime(_time: Date | string, format: string = "H:i"): string {
	const time = _time instanceof Date ? _time : new Date(_time);
	let hour, minutes;

	hour = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours(),
		minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();

	if (format === "H:i")
		return `${hour}:${minutes}`;
}

export function now(): Date {
	return new Date();
}

export async function showPreconfirmMessage(
	title: string,
	text: string,
	icon: string = "warning",
	cancelButtonText: string = "Cancelar",
	confirmButtonText: string = "Eliminar de todas formas",
): Promise<SweetAlertResult> {
	const swalOptions = {
		title: title,
		text: text,
		icon: icon,
		showCancelButton: true,
		confirmButtonColor: "#d33",
		cancelButtonColor: "#3085d6",
		cancelButtonText: cancelButtonText,
		confirmButtonText: confirmButtonText,
	} as SweetAlertOptions;

	return await swal.fire(swalOptions);
}

export async function showSuccessMessage(
	text:string,
	title:string = 'Exito',
):Promise<SweetAlertResult<void>>
{
  return swal.fire({
			title: title,
			text: text,
			icon: 'success' 
		});
}
