import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "พาปิม็อตจิ",
		'id-id': "Fidough"
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'th-th': "ยีสต์ที่อยู่ในลมหายใจของมันมีประโยชน์ในการปรุงอาหาร จึงมีมนุษย์คอยดูแลมันมาตั้งแต่ในอดีต",
		'id-id': "Karena napasnya yang mengandung ragi berguna untuk memasak, Fidough dirawat oleh manusia sejak zaman dahulu."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "กลิ่นดี",
			'id-id': "Bau Harum"
		},

		effect: {
			'th-th': "เลือกการ์ดโปเกมอน[พื้นฐาน] 1 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด",
			'id-id': "Pilih 1 lembar Pokémon Basic dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "เหยียบ",
			'id-id': "Menginjak"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card