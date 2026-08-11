import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Pansear",
		'th-th': "บาอปปุ"
	},

	illustrator: "Wintr Wandr",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		'id-id': "Pansear sangat cerdas dan memiliki kebiasaan memanggang buah beri sebelum memakannya. Pokémon ini suka membantu orang.",
		'th-th': "มีปัญญาสูง และมีนิสัยชอบเผาผลไม้ก่อนกิน ชอบช่วยเหลือคน"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Lidah Api",
			'th-th': "เผาไหม้"
		},

		damage: 20,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card