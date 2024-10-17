import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "คิเทรุกุมะ",
		id: "Bewear"
	},

	illustrator: "Takeshi Nakamura",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		th: "เมื่อยอมรับเป็นพวกพ้อง จะกอดรัดเพื่อแสดงความรัก แต่อันตรายเพราะกระดูกอาจแหลกเป็นผงได้",
		id: "Jika Bewear mengakui seseorang sebagai teman, ia akan memeluknya sebagai ungkapan kasih sayang. Akan tetapi, pelukannya sangat berbahaya karena dapat menghancurkan tulangmu."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "พาวเวอร์ชาร์จ",
			id: "Power Charge"
		},

		effect: {
			th: "เลือกการ์ดพลังงานพื้นฐาน 1 ใบจากสำรับการ์ดฝ่ายเรา ติดที่โปเกมอนนี้ แล้วสับสำรับการ์ด",
			id: "Pilih 1 lembar Energi Dasar dari Deck sendiri, lalu kenakan pada Pokémon ini. Kemudian, kocok Deck."
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			th: "ตบหนัก",
			id: "Hantaman Penuh Tenaga"
		},

		damage: 130,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card