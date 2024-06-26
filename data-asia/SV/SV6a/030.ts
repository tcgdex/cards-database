import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "阿勃梭魯"
	},

	illustrator: "rika",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		'zh-tw': "如風般地奔馳在山野中。 形狀如弓的角能夠敏銳 感應到自然災害的預兆。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "惡棍墜落"
		},

		effect: {
			'zh-tw': "若自己的場上的【惡】能量有3個以上，則增加50點傷害。"
		},

		damage: "20+",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card