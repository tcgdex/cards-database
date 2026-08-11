import { Card } from "../../../interfaces"
import Set from "../SC2D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "遠古巨蜓"
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		'zh-tw': "能以６隻腳攫住成年人並輕鬆地飛行。以尾部的翅膀保持平衡。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "急速折返"
		},

		effect: {
			'zh-tw': "若希望，將這隻寶可夢與備戰寶可夢互換。"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "利刃之風"
		},

		damage: 130,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "D"
}

export default card
