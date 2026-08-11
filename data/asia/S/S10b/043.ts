import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "班基拉斯"
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 180,
	types: ["Darkness"],

	description: {
		'zh-tw': "擁有無論遭受任何攻擊都能毫髮無傷的身體，因此會不斷向對手挑戰。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "激狂粉碎"
		},

		effect: {
			'zh-tw': "造成自己的所有備戰寶可夢身上放置的傷害指示物的數量×10點傷害。"
		},

		damage: "10×",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "地震"
		},

		effect: {
			'zh-tw': "自己的所有備戰寶可夢也各受到20點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 180,
		cost: ["Darkness", "Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card