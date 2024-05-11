import { Card } from "../../../interfaces"
import Set from "../S7D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "樂天河童"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	description: {
		'zh-tw': "樂天河童會跟著歡快的音樂搖擺身體，藉而增強自己的力量。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "嗨翻舞"
		},

		effect: {
			'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。在這個回合，自己的【基礎】寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+100」點。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "飛濺"
		},

		damage: 120,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card