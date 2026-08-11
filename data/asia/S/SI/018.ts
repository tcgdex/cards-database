import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "葉伊布VMAX"
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 310,
	types: ["Grass"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "打草結"
		},

		effect: {
			'zh-tw': "造成對手的戰鬥寶可夢【撤退】所需的能量的數量×60點傷害。"
		},

		damage: "60×",
		cost: ["Grass", "Colorless"]
	}, {
		name: {
			'zh-tw': "極巨綠葉"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「30」HP。"
		},

		damage: 170,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card