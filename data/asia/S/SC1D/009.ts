import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鐵蟻"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		'zh-tw': "在巢穴的深處產卵。受到熔蟻獸的襲擊時會用大大的顎部咬住對方進行反擊。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "一起啃食"
		},

		effect: {
			'zh-tw': "若自己的備戰區有「鐵蟻」，則增加60點傷害。"
		},

		damage: "30+",
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
