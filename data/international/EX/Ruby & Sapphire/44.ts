import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Skitty",
		'fr-fr': "Skitty",
		'de-de': "Eneco"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [300],

	hp: 40,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Minor Errand-Running",
				'fr-fr': "Rendez-vous mineur",
				'de-de': "Kleine Besorgung"
			},
			effect: {
				'en-us': "Search your deck for 2 basic Energy cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck deux cartes Énergie de base, montrez-les à votre adversaire et placez-les dans votre main. Mélangez ensuite votre deck.",
				'de-de': "Durchsuche dein Deck nach 2 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Lullaby",
				'fr-fr': "Comptine",
				'de-de': "Wiegenlied"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275692,
				tcgplayer: 89259
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275692,
				tcgplayer: 89259
			}
		},
		{
			type: "normal",
			stamp: ['reed-weichler'],
			thirdParty: {
				tcgplayer: 477431
			}
		},
		{
			type: "normal",
			stamp: ['chris-fulop'],
			thirdParty: {
				tcgplayer: 477430
			}
		},
	],

}

export default card
