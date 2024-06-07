import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "捷拉奧拉"
	},

	illustrator: "so-taro",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	description: {
		'zh-tw': "以媲美閃電的速度奔跑，用能釋放高壓電的爪子將敵人撕得粉碎。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "鬥志雷霆"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢為「寶可夢【V】・【GX】」，則增加80點傷害。"
		},

		damage: "30+",
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "D"
}

export default card
