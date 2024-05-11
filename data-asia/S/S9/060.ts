import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "臭泥"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		'zh-tw': "最近工廠排放的廢水太乾淨，使得牠沒東西可吃。 據說就快要絕種了。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "毒瓦斯"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。"
		},

		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card