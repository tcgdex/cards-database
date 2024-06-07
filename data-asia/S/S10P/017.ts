import { Card } from "../../../interfaces"
import Set from "../S10P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "哥達鴨"
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		'zh-tw': "生活在水流平穩的河川裡。會用長長的手腳划水， 展現自己優雅的泳姿。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "水之刀鋒"
		},

		damage: 50,
		cost: ["Water", "Colorless"]
	}, {
		name: {
			'zh-tw': "捲入奇襲"
		},

		effect: {
			'zh-tw': "將雙方的戰鬥寶可夢與附加的卡全部丟棄。[自己先將下一隻寶可夢放置於戰鬥場。]"
		},

		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card