import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "แครชแฮมเมอร์[ไอเท็ม]",
		'id-id': "Crush Hammer"
	},

	illustrator: "Ayaka Yoshida",
	category: "Trainer",

	effect: {
		'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว เลือกพลังงานที่ติดอยู่กับโปเกมอนบนกระดานฝ่ายตรงข้าม 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
		'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, pilih 1 Energi yang dikenakan pada Pokémon di Arena lawan, lalu buang ke Trash."
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card