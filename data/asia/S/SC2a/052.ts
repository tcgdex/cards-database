import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "好壞星"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'zh-tw': "要是被牠的毒刺給刺中，首先會發麻，接著會奇癢無比，讓人恨不得把皮都給抓爛。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "再生"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「30」HP。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "毒之觸手"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。"
		},

		damage: 20,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
