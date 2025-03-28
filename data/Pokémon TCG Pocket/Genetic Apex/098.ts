import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Magneton"
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],
	stage: "Stage1",
	evolveFrom: {
		en: "Magnemite"
	},


	abilities: [{
		type: "Ability",

		name: {
			en: "Volt Charge"
		},

		effect: {
			en: "Once during your turn, you may take a L Energy from your Energy Zone and attach it to this Pokémon."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Spinning Attack"
		},

		damage: "60"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Three Diamond",

	description: {
		en: "Three Magnemite are linked by a strong magnetic force. Earaches will occur if you get too close.",
	}
}

export default card
