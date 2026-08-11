import { Card } from "../../../interfaces"
import Set from "../SVD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "浮潛鼬"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'zh-tw': "膨脹起浮囊後就能讓人坐在自己背上。 排出浮囊的氣來潛水。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "漩渦尾"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢與附加的卡，全部放回對手的手牌。"
		},

		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "攀瀑"
		},

		damage: 60,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card