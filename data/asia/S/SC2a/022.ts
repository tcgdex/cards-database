import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "敏捷蟲"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'zh-tw': "行動迅速，會噴出毒液來戰鬥。敏捷蟲擔綱主角的電影和漫畫擁有極高的人氣。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "噴射頭擊"
		},

		damage: 70,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "D"
}

export default card
