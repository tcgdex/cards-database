import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Snorlax",
		'fr-fr': "Ronflex"
	},

	illustrator: "Ken Sugimori",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		143,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Immunity",
				'fr-fr': "Vaccin"
			},
			effect: {
				'en-us': "This Pokémon can't be affected by any Special Conditions. (Remove any Special Conditions affecting this Pokémon.)",
				'fr-fr': "Ce Pokémon ne peut être affecté par aucun État Spécial. (Retirez tous les États Spéciaux affectant ce Pokémon.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Body Slam",
				'fr-fr': "Plaquage"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 4,


	description: {
		'en-us': "It is not satisfied unless it eats over 880 pounds of food every day. When it is done eating, it goes promptly to sleep.",
	},

	thirdParty: {
		cardmarket: 295168
	}
}

export default card
