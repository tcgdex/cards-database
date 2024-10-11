import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "กิโม",
		id: "Morgrem"
	},

	illustrator: "Mékayu",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	description: {
		th: "โปเกมอนที่ดูดซับอารมณ์ด้านลบแล้วเปลี่ยนเป็นพลังงาน เป็นที่นิยมในหมู่คนที่ชอบคิดในแง่ลบ",
		id: "Morgrem adalah Pokémon yang mengisap emosi negatif dan menjadikannya sebagai energi. Pokémon ini populer di kalangan orang-orang yang memiliki pikiran negatif."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "ตบแรง",
			id: "Menepuk"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			th: "เขี้ยวแห่งความมืด",
			id: "Taring Kegelapan"
		},

		damage: 70,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card