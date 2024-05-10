import { Card } from "../../../interfaces"
import Set from "../svD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "拉普拉斯"
	},

	illustrator: "matazo",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'zh-tw': "十分耐寒，不畏冰海。皮膚滑滑的， 摸起來會有點涼。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "冰雹"
		},

		effect: {
			'zh-tw': "對手的所有寶可夢各受到10點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "凍凝之風"
		},

		damage: 100,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card