import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Hypno"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],
	stage: "Stage1",
	evolveFrom: {
		en: "Drowzee"
	},


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

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],


	retreat: 2,
	rarity: "Three Diamond",

	description: {
		en: "When it locks eyes with an enemy, it will use a mix of psi moves, such as Hypnosis and Confusion.",
	}
}

export default card
