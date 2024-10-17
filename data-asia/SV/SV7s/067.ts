import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "พาปิม็อตจิ",
		id: "Fidough"
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		th: "ยีสต์ที่อยู่ในลมหายใจของมันมีประโยชน์ในการปรุงอาหาร จึงมีมนุษย์คอยดูแลมันมาตั้งแต่ในอดีต",
		id: "Karena napasnya yang mengandung ragi berguna untuk memasak, Fidough dirawat oleh manusia sejak zaman dahulu."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "กลิ่นดี",
			id: "Bau Harum"
		},

		effect: {
			th: "เลือกการ์ดโปเกมอน[พื้นฐาน] 1 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด",
			id: "Pilih 1 lembar Pokémon Basic dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			th: "เหยียบ",
			id: "Menginjak"
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