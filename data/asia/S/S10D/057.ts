import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "貪心栗鼠"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'zh-tw': "在伽勒爾隨處可見。如果不往兩邊的頰囊裡 塞滿樹果，就會感到不安。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "咬"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card