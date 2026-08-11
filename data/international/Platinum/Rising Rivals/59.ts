import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Eevee",
		'fr-fr': "Evoli Niv. 10",
		'de-de': "Evoli"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [133],

	hp: 50,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Signs of Evolution",
				'fr-fr': "Signes d'evolution",
				'de-de': "Spuren der Evolution"
			},
			effect: {
				'en-us': "Search your deck for up to 2 cards that evolve from Eevee, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes qui évoluent d'Evoli. Montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach bis zu 2 Karten, die sich aus Evoli entwickeln, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Bounce",
				'fr-fr': "Faire des bonds",
				'de-de': "Sprungfeder"
			},
			effect: {
				'en-us': "Switch Eevee with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez Evoli avec 1 des Pokémon de votre Banc.",
				'de-de': "Tausche Evoli gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 10,

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
		'en-us': "Because its genetic makeup is irregular, it quickly changes its form due to a variety of causes."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278633,
				tcgplayer: 85086
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278633,
				tcgplayer: 85086
			}
		},
	],

}

export default card
