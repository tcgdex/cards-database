import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "頑皮熊貓"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		'zh-tw': "為了不被小看而一直瞪著對手，然而繃緊的神經一旦稍有放鬆，牠就會在無意中露出笑臉。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "惡養"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張【惡】能量卡，附於這隻寶可夢身上。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "踢飛"
		},

		damage: 30,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card