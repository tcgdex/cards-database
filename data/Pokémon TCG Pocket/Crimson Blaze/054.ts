import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Genesect"
	},

	illustrator: "kawayoo",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	description: {
		en: "This ancient bug Pokémon was altered by Team\nPlasma. They upgraded the cannon on its back."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Metal Blast"
		},

		damage: 10,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "This attack does 20 more damage for each {M} Energy attached to this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card