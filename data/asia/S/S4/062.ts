import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "重泥挽馬"
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		'zh-tw': "泥巴使牠的蹄變得比岩石還要堅硬，只要一擊就能產生足以破壞卡車的威力。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "泥巴炸彈"
		},

		damage: 50,
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			'zh-tw': "重磅衝撞"
		},

		effect: {
			'zh-tw': "減少對手的戰鬥寶可夢【撤退】所需的能量的數量×30點傷害。"
		},

		damage: "180-",
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card