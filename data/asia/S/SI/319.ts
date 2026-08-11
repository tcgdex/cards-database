import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雙斧戰龍"
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 170,
	types: ["Dragon"],
	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "劈開"
		},

		damage: 60,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "瘋狂斧"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		},

		damage: 160,
		cost: ["Fighting", "Metal"]
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card