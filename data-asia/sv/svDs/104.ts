import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "แอร์มุโด",
		id: "Skarmory"
	},

	illustrator: "Takeshi Nakamura",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		th: "เพราะมีการนำขนที่ร่วงออกมาทำเป็นดาบ จึงได้รับความนิยมสูงในการนำมาทำเป็นแบบของตราประจำตระกูล",
		id: "Bulu rontok Skarmory dapat dibuat menjadi pedang, sehingga Pokémon ini populer sebagai desain lambang kebesaran."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "จิก",
			id: "Mematuk"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			th: "สตีลสแลช",
			id: "Steel Slash"
		},

		effect: {
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ [สตีลสแลช] ไม่ได้",
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan Steel Slash."
		},

		damage: 120,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card