import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "สลับการ์ดพลังงาน[ไอเท็ม]",
		'id-id': "Pengalih Energi"
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		'th-th': "เลือกพลังงานพื้นฐานที่ติดอยู่กับโปเกมอนบนกระดานฝ่ายเรา 1 ลูก ย้ายไปติดกับโปเกมอนตัวอื่นของฝ่ายเรา",
		'id-id': "Pilih 1 Energi Dasar yang dikenakan pada Pokémon di Arena sendiri, lalu pindahkan ke Pokémon sendiri lainnya."
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card