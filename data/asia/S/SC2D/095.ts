import { Card } from "../../../interfaces"
import Set from "../SC2D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雙首暴龍"
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		'zh-tw': "在自己的領地走來走去，尋找食物。２個頭時常會為了前進的方向而爭吵。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "推擊"
		},

		damage: 30,
		cost: ["Darkness", "Colorless"]
	}, {
		name: {
			'zh-tw': "暗之牙"
		},

		damage: 70,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
