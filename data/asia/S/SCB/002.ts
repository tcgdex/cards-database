import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "妙蛙花VMAX"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 330,
	types: ["Grass"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "森林風暴"
		},

		effect: {
			'zh-tw': "造成自己的場上寶可夢身上附加的【草】能量的數量×30點傷害。"
		},

		damage: "30×",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "超極巨花團錦簇"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「30」HP。"
		},

		damage: 210,
		cost: ["Grass", "Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E"
}

export default card