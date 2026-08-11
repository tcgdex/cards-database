import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Koffing",
		'fr-fr': "Smogo",
		'de-de': "Smogon"
	},

	illustrator: "Lee HyunJung",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		109,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'de-de': "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Smogscreen",
				'fr-fr': "Para-brouillard",
				'de-de': "Smogwolke"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned. If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné. S'il essaye d'attaquer lors du prochain tour de votre adversaire, celui-ci lance une pièce. Si c'est pile, cette attaque est sans effet.",
				'de-de': "Das Verteidigende Pokémon ist jetzt vergiftet. Falls das Verteidigende Pokémon während des nächsten Zuges deines Gegners angreift, wirft dein Gegner 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Lighter-than-air gases in its body keep it aloft. The gases not only smell, they are also explosive.",
	},

	thirdParty: {
		cardmarket: 277976,
		tcgplayer: 86496
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
