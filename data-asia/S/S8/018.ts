import { Card } from "../../../interfaces"
import Set from "../S8"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "海星星"
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'zh-tw': "不管受多少傷都不怕。由於再生能力很強，只要半天左右就會復原。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "泡水"
		},

		effect: {
			'zh-tw': "從自己的手牌選擇1張【水】能量卡，附於這隻寶可夢身上。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "迴轉攻擊"
		},

		damage: 10,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card