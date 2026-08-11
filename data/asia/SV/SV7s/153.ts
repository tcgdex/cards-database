import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "นาฬิกาทรายแห่งพลัง",
		'id-id': "Jam Pasir Kekuatan‌"
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		'th-th': "เมื่อจบเทิร์นฝ่ายเรา ถ้าโปเกมอนที่ติดการ์ดนี้อยู่อยู่บนตำแหน่งต่อสู้ จะเลือกการ์ดพลังงานพื้นฐาน 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนนั้นก็ได้",
		'id-id': "Pada akhir giliran sendiri, jika Pokémon yang mengenakan kartu ini ada di Arena Bertarung, pemain dapat memilih 1 lembar Energi Dasar dari Trash sendiri, lalu mengenakannya pada Pokémon tersebut."
	},

	trainerType: "Tool",
	regulationMark: "H"
}

export default card