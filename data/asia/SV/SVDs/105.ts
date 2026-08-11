import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โดริวซึ",
		'id-id': "Excadrill"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		'th-th': "มีอีกสมญาว่าเจ้าแห่งการเจาะ ความเร็วในการขุดลงไปใต้ดินเร็วถึง 150 กิโลเมตรต่อชั่วโมง",
		'id-id': "Nama lainnya adalah Drill King. Kecepatan menggali Excadrill di bawah tanah mencapai 150 km/jam."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "แทง",
			'id-id': "Melubangi"
		},

		damage: 60,
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card