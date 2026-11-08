import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "เปลหามยามราตรี",
		'id-id': "Tandu Malam‌"
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'th-th': "เลือกการ์ดโปเกมอนหรือการ์ดพลังงานพื้นฐาน 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ",
		'id-id': "Pilih 1 lembar Pokémon atau Energi Dasar dari Trash sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan."
	},

	trainerType: "Item",
	regulationMark: "H"
}

export default card