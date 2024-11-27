import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Hypno"
	},

	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Sleep Pendulum"
		},

		effect: {
			en: "Once during your turn, you may flip a coin. If heads, your opponent's Active Pokémon is now Asleep."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Psypunch"
		},

		damage: "50"
	}],

	retreat: 2,
	rarity: "Three Diamond"
}

export default card
