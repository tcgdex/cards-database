import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大朝北鼻"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],

	description: {
		'zh-tw': "因為會釋放強大的磁力，導致附近的電器都變得無法使用。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "重力墜擊"
		},

		effect: {
			'zh-tw': "增加對手的戰鬥寶可夢【撤退】所需的能量的數量×30點傷害。"
		},

		damage: "10+",
		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "重磅衝擊"
		},

		damage: 120,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "D"
}

export default card