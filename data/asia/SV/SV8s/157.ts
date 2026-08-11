import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Transfer Energi PRO",
		'th-th': "ส่งต่อพลังงาน PRO"
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'id-id': "Pilih sesukanya Energi Dasar yang masing-masing berbeda tipenya dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck.",
		'th-th': "เลือกการ์ดพลังงานพื้นฐานที่แต่ละใบต่างประเภทกันตามจำนวนที่ชอบ จากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด"
	},

	trainerType: "Item",
	regulationMark: "H"
}

export default card