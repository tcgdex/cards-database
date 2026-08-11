import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "壺壺"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'zh-tw': "甲殼裡儲存著樹果。為了避免受到襲擊，會一動不動地躲在岩石下面。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "榨山"
		},

		effect: {
			'zh-tw': "擲硬幣直到出現反面，將對手的牌庫上方與正面出現的次數相同數量的卡丟棄。"
		},

		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "落石"
		},

		damage: 50,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
