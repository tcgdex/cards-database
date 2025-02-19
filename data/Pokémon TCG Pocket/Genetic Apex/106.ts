import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Zebstrika"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	stage: "Stage1",
	evolveFrom: {
		en: "Blitzle"
	},


	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Thunder Spear"
		},

		effect: {
			en: "This attack does 30 damage to 1 of your opponent's Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		en: "When this ill-tempered Pokémon runs wild, it shoots lightning from its mane in all directions.",
	}
}

export default card
