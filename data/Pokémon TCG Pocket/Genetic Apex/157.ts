import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Rhydon"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Stage1",
	evolveFrom: {
		en: "Rhyhorn"
	},


	attacks: [{
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"],

		name: {
			en: "Horn Drill"
		},

		damage: "100"
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 4,
	rarity: "Two Diamond",

	description: {
		en: "It begins walking on its hind legs after evolution. It can punch holes through boulders with its horn.",
	}
}

export default card
