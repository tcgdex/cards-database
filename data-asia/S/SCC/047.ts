import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "愛心魚"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'zh-tw': "溫暖海域的珊瑚礁是牠的棲息地。最喜歡在太陽珊瑚的枝條間睡覺。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "同步抽出"
		},

		effect: {
			'zh-tw': "將自己的手牌全部放回牌庫並重洗。然後，從自己的牌庫抽出與對手的手牌張數相同數量的卡。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "水槍"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card