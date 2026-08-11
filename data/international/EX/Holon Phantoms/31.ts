import { Card } from 'models/database/card'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		'en-us': "Sableye",
		'fr-fr': "Tenefix",
		'de-de': "Zobiris"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		302,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Paralyzing Gaze",
				'fr-fr': "Regard paralysant",
				'de-de': "Lähmender Blick"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Knock Off",
				'fr-fr': "Sabotage",
				'de-de': "Abschlag"
			},
			effect: {
				'en-us': "Choose 1 card from your opponent's hand without looking and discard it.",
				'fr-fr': "Choisissez sans regarder une carte de la main de votre adversaire et défaussez-la.",
				'de-de': "Wähle 1 Karte von der Hand deines Gegners (ohne sie vorher anzusehen). Dein Gegner legt diese Karte auf seinen Ablagestapel."
			},
			damage: 10,

		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 277001,
		tcgplayer: 88849
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
	]
}

export default card
