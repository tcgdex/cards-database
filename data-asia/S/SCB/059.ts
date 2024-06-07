import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "天秤偶"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'zh-tw': "在古代遺跡被發現。會一邊旋轉一邊移動。晚上睡覺的時候也是單腳站著。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "自爆"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到60點傷害。"
		},

		damage: 60,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card