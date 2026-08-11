import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Megaton Blower",
		'th-th': "เมกะตันโบลเวอร์"
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'id-id': "Buang semua Pokémon Tool dan Energi Spesial yang dikenakan pada semua Pokémon lawan dan Stadium yang ada di Arena ke Trash.",
		'th-th': "ทิ้ง [ไอเท็มติดโปเกมอน] และ [พลังงานพิเศษ] ที่ติดอยู่กับโปเกมอน ฝ่ายตรงข้ามทุกตัว และ [สเตเดียม] ที่วางอยู่บนกระดาน ทั้งหมดที่ ตำแหน่งทิ้งการ์ด"
	},

	trainerType: "Item",
	regulationMark: "H"
}

export default card