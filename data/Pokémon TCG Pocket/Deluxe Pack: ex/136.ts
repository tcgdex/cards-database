import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Magneton"
	},

	illustrator: "kirisAki",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	evolveFrom: {
		en: "Magnemite"
	},

	description: {
		en: "Three Magnemite are linked by a strong magnetic\nforce. Earaches will occur if you get too close."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Volt Charge"
		},

		effect: {
			en: "Once during your turn, you may take a {L} Energy from your Energy Zone and attach it to this Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Spinning Attack"
		},

		damage: 60,
		cost: ["Lightning", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card