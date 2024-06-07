import { Card } from "../../../interfaces"
import Set from "../S11a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "長尾火狐"
	},

	illustrator: "Ligton",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		'zh-tw': "將樹枝從尾巴拔出時，會因摩擦而起火。會揮動樹枝，以樹枝上面的火焰向夥伴發送信號。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "烈焰"
		},

		damage: 30,
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "閃焰遊行"
		},

		effect: {
			'zh-tw': "造成自己的棄牌區的「莎莉娜」的張數×60點傷害。"
		},

		damage: "60×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card