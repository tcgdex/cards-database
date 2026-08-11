import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "偽螳草"
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "連續斬"
		},

		effect: {
			'zh-tw': "擲硬幣直到出現反面，造成正面出現的次數×20點傷害。"
		},

		damage: "20×",
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card