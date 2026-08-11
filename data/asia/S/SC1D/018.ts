import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "九尾"
	},

	illustrator: "Megumi Higuchi",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		'zh-tw': "每一根尾巴裡都蘊含著神通力。據說牠的壽命長達１０００年。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "火焰纏身"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇1張【火】能量卡，附於這隻寶可夢身上。"
		},

		damage: 30,
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "火之鬃"
		},

		damage: 70,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
