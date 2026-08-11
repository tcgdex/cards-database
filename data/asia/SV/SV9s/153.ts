import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โซรัว <ของ N>",
		'id-id': "Zorua <N>"
	},

	illustrator: "Megumi Mizutani",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'th-th': "แปลงกายเป็นอีกฝ่ายให้ตกใจ เหมือนว่าจะแปลงเป็นเด็กเงียบ ๆ อยู่ บ่อย ๆ"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "ข่วน",
			'id-id': "Mencakar"
		},

		damage: 20,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card