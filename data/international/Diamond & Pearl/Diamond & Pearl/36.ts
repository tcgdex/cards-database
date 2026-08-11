import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Purugly",
		'fr-fr': "Chaffreux",
		'de-de': "Shnurgarst"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		432,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Glameow",
		'fr-fr': "Chaglam",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "High Hat",
				'fr-fr': "Chapeau haut",
				'de-de': "Hoher Hut"
			},
			effect: {
				'en-us': "Choose 1 card from your opponent's hand without looking and discard it.",
				'fr-fr': "Choisissez sans regarder 1 carte de la main de votre adversaire et défaussez-la.",
				'de-de': "Wähle 1 Karte von der Hand deines Gegners (ohne sie vorher anzusehen). Dein Gegner legt diese Karte auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Body Slam",
				'fr-fr': "Plaquage",
				'de-de': "Bodyslam"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf 1 Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It is a brazen brute that barges its way into another Pokémon's nest and claims it as its own.",
		'fr-fr': "Cette brute arrogante n'hésite pas à voler le nid d'autres Pokémon pour s'y installer."
	},

	thirdParty: {
		cardmarket: 277535,
		tcgplayer: 88464
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
