import { Card } from "../../../interfaces"
import Set from "../SVD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "啪嚓海膽"
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		'zh-tw': "消化食物時會製造出電力。５顆堅硬的牙齒能用來 把海藻連根拔起來吃。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "麻痺針"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		},

		damage: 20,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "啪啪追擊"
		},

		effect: {
			'zh-tw': "這個招式必須在上個自己的回合這隻寶可夢使用了「麻痺針」才可使用。"
		},

		damage: 100,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card