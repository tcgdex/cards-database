import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Moltres"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "None",
	category: "Pokemon",
	dexId: [146],
	hp: 120,
	types: ["Darkness"],

	description: {
		en: "The sinister aura that blazes like molten fire around this Pokémon is what inspired the name Moltres."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Malevolent Charge"
		},

		effect: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may attach up to 2 Darkness Energy cards from your hand to this Pokémon."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Fiery Wrath"
		},

		effect: {
			en: "This attack does 50 more damage for each Prize card your opponent has taken."
		},

		damage: "20+"
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card