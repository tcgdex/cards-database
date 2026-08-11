import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "可可多拉"
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "咬"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "滾動衝撞"
		},

		damage: 50,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card