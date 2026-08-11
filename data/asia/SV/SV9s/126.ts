import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "กระเป๋าของฮ็อป",
		'id-id': "Tas Hop"
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		'th-th': "เลือกการ์ด [โปเกมอนของฮ็อป] ที่เป็นโปเกมอน[พื้นฐาน]ได้สูงสุด 2 ใบจาก สำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด",
		'id-id': "Pilih paling banyak 2 lembar Pokémon Hop yang merupakan Pokémon Basic dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck."
	},

	trainerType: "Item",
	regulationMark: "I"
}

export default card