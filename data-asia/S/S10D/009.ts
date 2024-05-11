import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "火球鼠"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		'zh-tw': "棲息在城都地區的寶可夢。 生性膽小，總是將身子縮成一團， 但其實體內蘊藏著強大的火力。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "蓄能量"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張基本能量卡，在給對手看過後加入手牌。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "火種"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card