import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Weezing"
	},

	illustrator: "OOYAMA",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],
	stage: "Stage1",
	evolveFrom: {
		en: "Koffing"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Gas Leak"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in the Active Spot, you make take your opponent's Active Pokémon Poisoned."
		}
	}],

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Tackle"
		},

		damage: "30"
	}],

	retreat: 3,
	rarity: "Three Diamond"
}

export default card
