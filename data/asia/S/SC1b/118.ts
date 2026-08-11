import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伊布"
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'zh-tw': "伊布擁有著能夠為了適應周遭的環境而改變身體構造的能力。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "進化預兆"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張從「伊布」進化而來的卡，在給對手看過後加入手牌。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "踹"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
