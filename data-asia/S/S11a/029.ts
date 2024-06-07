import { Card } from "../../../interfaces"
import Set from "../S11a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "愛心魚"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'zh-tw': "溫暖海域的珊瑚礁是牠的棲息地。最喜歡在太陽珊瑚的枝條間睡覺。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "情緒抽出"
		},

		effect: {
			'zh-tw': "將自己的手牌全部放回牌庫並重洗。然後，從牌庫抽出5張卡。"
		},

		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "撞擊"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card