import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Doduo",
		'fr-fr': "Doduo",
		'de-de': "Dodu"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		84,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Double Stab",
				'fr-fr': "Coup double",
				'de-de': "Doppelstich"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Accelerating Stab",
				'fr-fr': "Poignard accélérateur",
				'de-de': "Beschleunigter Stich"
			},
			effect: {
				'en-us': "Doduo can't use Accelerating Stab during your next turn.",
				'fr-fr': "Doduo ne peut pas utiliser Coup de poignard accélérateur lors de votre prochain tour.",
				'de-de': "Dodu kann Beschleunigter Stich in deinem nächsten Zug nicht einsetzen."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,


	description: {
		'en-us': "The brains in its two heads appear to communicate emotions to each other with a telepathic power.",
		'fr-fr': "Ses deux cerveaux semblent communiquer leurs émotions grâce à un lien télépathique."
	},

	thirdParty: {
		cardmarket: 277709,
		tcgplayer: 84863
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
