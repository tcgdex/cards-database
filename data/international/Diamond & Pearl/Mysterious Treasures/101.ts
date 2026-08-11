import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Snover",
		'fr-fr': "Blizzi",
		'de-de': "Shnebedeck"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		459,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Curiosity",
				'fr-fr': "Curiosité",
				'de-de': "Neugier"
			},
			effect: {
				'en-us': "Look at your opponent's hand.",
				'fr-fr': "Regardez la main de votre adversaire.",
				'de-de': "Schau dir die Handkarten deines Gegners an."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Snowball Fight",
				'fr-fr': "Bataille de boules de neige",
				'de-de': "Schneeballschlacht"
			},
			effect: {
				'en-us': "Flip a coin. If tails, Snover does 10 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c'est pile, Blizzi s'inflige 10 dégâts.",
				'de-de': "Wirf 1 Münze. Bei 'Zahl' fügt sich Shnebedeck selbst 10 Schadenspunkte zu."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],
	retreat: 2,


	description: {
		'en-us': "It lives on snowy mountains. Having had little contact with humans, it is boldly inquisitive.",
		'fr-fr': "Il vit sur les monts enneigés. Ignorant des coutumes humaines, il lui arrive d'être très indiscret."
	},

	thirdParty: {
		cardmarket: 277730,
		tcgplayer: 89405
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			stamp: ["countdown-calendar"]
		}
	]
}

export default card
