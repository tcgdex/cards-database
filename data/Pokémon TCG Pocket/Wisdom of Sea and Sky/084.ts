import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Unown"
	},

	illustrator: "OKUBO",
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
			en: "GUARD"
		},

		effect: {
			en: "This Ability works if you have any Unown in play with an Ability other than . All of your Pokémon take −10 damage from attacks from your opponent's Pokémon."
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

	retreat: 1
}

export default card