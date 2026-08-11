import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Drifloon",
		'fr-fr': "Baudrive",
		'de-de': "Driftlon"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		425,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Delivery",
				'fr-fr': "Livraison",
				'de-de': "Anlieferung"
			},
			effect: {
				'en-us': "Flip a coin. If heads, put any 1 card from your discard pile into your hand.",
				'fr-fr': "Lancez une pièce. Si c'est face, placez dans votre main n'importe quelle carte de votre pile de défausse.",
				'de-de': "Wirf 1 Münze. Bei 'Kopf' wähle 1 Karte aus deinem Ablagestapel und nimm sie auf die Hand."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Reaction",
				'fr-fr': "Réagir",
				'de-de': "Reaction"
			},
			effect: {
				'en-us': "Switch Drifloon with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez Baudrive avec 1 des Pokémon de votre Banc.",
				'de-de': "Tausche Driftlon gegen 1 Pokémon auf diener Bank aus."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It tugs on the hands of children to steal them away. However, it gets pulled around instead.",
	},

	thirdParty: {
		cardmarket: 278110,
		tcgplayer: 84955
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
