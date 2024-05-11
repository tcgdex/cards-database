import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "暴雪王"
	},

	illustrator: "Kazuma Koda",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		'zh-tw': "會像揮動鎚子般揮下自己大大的手臂，趕走要襲擊雪笠怪的火紅不倒翁群體。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "芳香催眠"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。"
		},

		damage: 80,
		cost: ["Grass", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "百萬噸金勾臂"
		},

		damage: 140,
		cost: ["Grass", "Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card
