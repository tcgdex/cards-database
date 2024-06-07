import { Card } from "../../../interfaces"
import Set from "../S11a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "妖火紅狐"
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],

	description: {
		'zh-tw': "能用超能力操控攝氏３０００度的火焰旋渦。用旋渦包圍敵人後將其燒盡。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "閃焰遊行"
		},

		effect: {
			'zh-tw': "造成自己的棄牌區的「莎莉娜」的張數×60點傷害。"
		},

		damage: "60×",
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "能量粉碎"
		},

		effect: {
			'zh-tw': "造成對手的場上寶可夢身上附加的能量的數量×50點傷害。"
		},

		damage: "50×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card