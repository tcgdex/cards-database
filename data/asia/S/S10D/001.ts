import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蜻蜻蜓"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'zh-tw': "翅膀看似脆弱，薄到可以透光。 然而當牠飛翔之時卻能拂亂大氣， 發揮足以吹倒家屋的強勁力道。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "高速飛行"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "F"
}

export default card