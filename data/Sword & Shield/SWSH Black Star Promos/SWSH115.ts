import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "Teeziro",
	category: "Pokemon",

	description: {
		en: "Passimian live in groups of about 20, with each member performing an assigned role. Through cooperation, the group survives."
	},

	stage: "Basic",

	name: {
		en: "Passimian"
	},

	rarity: "None",
	dexId: [766],
	hp: 110,
	types: ["Fighting"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Throwing Coach"
		},

		effect: {
			en: "Your Rapid Strike Pokémon's attacks do 30 more damage to your opponent's Benched Pokémon V and Benched Pokémon-GX (before applying Weakness and Resistance). You can't apply more than 1 Throwing Coach Ability at a time."
		}
	}],

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Fling"
		},

		effect: {
			en: "This attack does 20 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "E"
}

export default card
