import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "青銅鐘"
	},

	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		'zh-tw': "被稱為能召喚雨雲的神明。生氣時會用像鐘聲一般令人毛骨悚然的聲音來威嚇對手。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "掌擊"
		},

		damage: 30,
		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "陀螺球"
		},

		effect: {
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。然後，對手將對手自己的戰鬥寶可夢與備戰寶可夢互換。"
		},

		damage: 70,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card
