import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "白蓬蓬"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'zh-tw': "棉絮的種子營養豐富。牠會藉由風散播種子，讓草木和寶可夢變得活力十足。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "恩澤棉絮"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多3張【草】能量卡，以任意方式附於備戰寶可夢身上。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "樹葉"
		},

		damage: 30,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
