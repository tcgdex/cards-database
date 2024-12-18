import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Raichu"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			en: "Thunderbolt"
		},

		effect: {
			en: "Discard all Energy from this Pokémon."
		},

		damage: "140"
	}],

	retreat: 1,
	rarity: "Three Diamond",

	evolveFrom: {
		en: "Pikachu",
		fr: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		pt: "Pikachu",
		de: "Pikachu"
	}
}

export default card
