import { Card } from "../../../interfaces"
import Set from "../S10P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "投羽梟"
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'zh-tw': "經常為了積蓄力量而沐浴陽光。吾人推測 這是因為當地氣候較為寒冷，然而藏於 雙翅中的刃羽鋒利程度並無不同。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "羽擊"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "銳利羽"
		},

		damage: 60,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card