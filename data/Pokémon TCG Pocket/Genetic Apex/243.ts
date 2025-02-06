import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Weezing"
	},

	illustrator: "KEIICHIRO ITO",
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

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3,
	rarity: "One Star",

	description: {
		en: "If one of the twin Koffing inflates, the other one deflates. It constantly mixes its poisonous gases.",
	}
}

export default card
