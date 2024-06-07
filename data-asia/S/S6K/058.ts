import { Card } from "../../../interfaces"
import Set from "../S6K"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "貪心栗鼠"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'zh-tw': "由於牠無論何時都在吃樹果，使得牠比外表看起來還要頑強。會出現在田地裡尋找樹果。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "撿起來吃"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇1張「寶可夢道具」卡，在給對手看過後加入手牌。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "咬"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card