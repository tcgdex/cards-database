import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Miracle Intercom",
		'th-th': "มิราเคิลอินเตอร์คอม"
	},

	illustrator: "inose yukie",
	category: "Trainer",

	effect: {
		'id-id': "Pilih paling banyak 2 lembar Supporter dari Trash sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan.",
		'th-th': "เลือกการ์ดซัพพอร์ตได้สูงสุด 2 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ"
	},

	trainerType: "Item",
	regulationMark: "H"
}

export default card