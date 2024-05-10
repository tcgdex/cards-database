import { Card } from "../../../interfaces"
import Set from "../SVD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "長毛狗"
	},

	illustrator: "Keisin",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],

	description: {
		'zh-tw': "以氣派的鬍鬚為傲的寶可夢。據說在夥伴之間的階級地位 就取決於鬍鬚的長度。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "咬咬恐慌"
		},

		effect: {
			'zh-tw': "造成對手的戰鬥寶可夢【撤退】所需的能量的數量×50點傷害。"
		},

		damage: "50×",
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "銳利之牙"
		},

		damage: 140,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card