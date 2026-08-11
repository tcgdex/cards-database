import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Honedge",
		'fr-fr': "Monorpale",
	},

	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		679,
	],

	hp: 50,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Swords Dance",
				'fr-fr': "Danse-Lames",
			},
			effect: {
				'en-us': "During your next turn, this Pokémon's Slash attack's base damage is 40.",
				'fr-fr': "Pendant votre prochain tour, les dégâts de base de l'attaque Tranche de ce Pokémon sont de 40.",
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Apparently this Pokémon is born when a departed spirit inhabits a sword. It attaches itself to people and drinks their life force.",
	},

	thirdParty: {
		cardmarket: 281334
	}
}

export default card
