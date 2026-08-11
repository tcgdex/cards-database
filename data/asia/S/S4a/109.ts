import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "叉字蝠VMAX"
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 300,
	types: ["Darkness"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "隱形毒液"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。將這隻寶可夢與備戰寶可夢互換。"
		},

		damage: 70,
		cost: ["Darkness", "Colorless"]
	}, {
		name: {
			'zh-tw': "極巨利刃"
		},

		damage: 180,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card