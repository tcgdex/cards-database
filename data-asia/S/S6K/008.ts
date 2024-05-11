import { Card } from "../../../interfaces"
import Set from "../S6K"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "轟擂金剛猩"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 180,
	types: ["Grass"],

	description: {
		'zh-tw': "打鼓技巧最高超的那一隻會成為首領。性情溫和，重視族群的和諧相處。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "木之吸取"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「30」HP。"
		},

		damage: 60,
		cost: ["Grass", "Colorless"]
	}, {
		name: {
			'zh-tw': "怒濤連打"
		},

		effect: {
			'zh-tw': "將自己的場上寶可夢身上附加的任意數量的能量丟棄，增加其張數×30點傷害。"
		},

		damage: "120+",
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card