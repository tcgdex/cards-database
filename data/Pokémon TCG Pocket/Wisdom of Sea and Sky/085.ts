import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Unown"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		en: "Its flat, thin body is always stuck on walls. Its shape\nappears to have some meaning."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "POWER"
		},

		effect: {
			en: "This Ability works if you have any Unown in play with an Ability other than . Attacks used by your Pokémon do +10 damage to your opponent's Active Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Hidden Power"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card