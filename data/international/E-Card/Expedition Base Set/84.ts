import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Kadabra",
		'fr-fr': "Kadabra",
		'de-de': "Kadabra"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [64],

	hp: 70,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Abra",
		'fr-fr': "Abra"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Energy Recall",
				'fr-fr': "Rappel d'énergie",
				'de-de': "Energierückgewinnung"
			},
			effect: {
				'en-us': "Attach 2 basic Energy cards from your discard pile to Kadabra (1 if you have only 1).",
				'fr-fr': "Attachez 2 cartes Énergie de base de votre pile de défausse à Kadabra (1 seule si vous n'en avez qu'une).",
				'de-de': "Lege 2 Basis-Energiekarten aus deinem Ablagestapel an Kadabra an (1, wenn du nur 1 hast)."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Confuse Ray",
				'fr-fr': "Onde folie",
				'de-de': "Konfustrahl"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verwirrt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86406,
				cardmarket: 274959
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86406,
				cardmarket: 274959
			},
		},
	],
}

export default card
