import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鐵殼蛹"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'zh-tw': "雖然掛在樹上幾乎一動也不動，但體內正為了進化而忙碌準備著。證據就是牠的身體會變得很熱。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "蟲咬"
		},

		damage: 30,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card
