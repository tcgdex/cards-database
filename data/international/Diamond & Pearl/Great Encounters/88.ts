import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Togepi",
		'fr-fr': "Togepi",
		'de-de': "Togepi"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		175,
	],

	hp: 50,

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
				'en-us': "Yawn",
				'fr-fr': "Baillement",
				'de-de': "Gähnen"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Find a friend",
				'fr-fr': "Trouver un ami",
				'de-de': "Freunde finden"
			},
			effect: {
				'en-us': "Flip a coin. If heads, search your deck for a Pokémon, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Lancez une pièce. Si c'est face, choisissez un Pokémon dans votre deck, montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" durchsuche dein Deck nach einer Pokémon-Karte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its shell is said to be stuffed with happiness that it shares with kindhearted people.",
	},

	thirdParty: {
		cardmarket: 277990,
		tcgplayer: 89934
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
