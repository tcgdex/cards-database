import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ทรัมเป็ตแก้ว",
		'id-id': "Terompet Kaca"
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'th-th': "การ์ดนี้ จะใช้ได้แค่ตอนที่บนกระดานฝ่ายเรามีโปเกมอน [เทรัสตัล] เลือกโปเกมอน[ไร้สี]บนเบนช์ฝ่ายเราได้สูงสุด 2 ตัว นำการ์ดพลังงานพื้นฐานจากตำแหน่งทิ้งการ์ดมาติดตัวละ 1 ใบ",
		'id-id': "Kartu ini hanya dapat digunakan saat ada Pokémon Terastal di Arena sendiri. Pilih paling banyak 2 Pokémon {Bening} di Cadangan sendiri, lalu kenakan Energi Dasar masing-masing 1 lembar dari Trash."
	},

	trainerType: "Item",
	regulationMark: "H"
}

export default card