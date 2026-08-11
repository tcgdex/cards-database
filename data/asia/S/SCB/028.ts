import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "水箭龜V"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "水槍"
		},

		damage: 30,
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "激流炮"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「激流炮」。"
		},

		damage: 200,
		cost: ["Water", "Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card