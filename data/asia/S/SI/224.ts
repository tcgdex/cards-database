import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "沙漠蜻蜓"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],
	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "沙漠支柱"
		},

		effect: {
			'zh-tw': "造成對手的戰鬥寶可夢【撤退】所需的能量的數量×50點傷害。"
		},

		damage: "50×",
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "爆破之風"
		},

		damage: 110,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card