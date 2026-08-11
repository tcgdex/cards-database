import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Nidoran ♀",
		'fr-fr': "Nidoran♀ Niv. 14",
		'de-de': "Nidoran w"
	},
	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [29],
	hp: 60,
	types: [
		"Psychic"
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
				'de-de': "Kratzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Offer Help",
				'fr-fr': "Offrir de l'aide",
				'de-de': "Hilfe anbieten"
			},
			effect: {
				'en-us': "Search your deck for a Supporter card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck une carte Supporter, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach 1 Unterstützerkarte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],
	retreat: 1,

	description: {
		'en-us': "While it does not prefer to fight, even one drop of the poison it secretes from barbs can be fatal."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278645,
				tcgplayer: 87719
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278645,
				tcgplayer: 87719
			}
		},
		{
			type: "normal",
			stamp: ["david-cohen"],
			thirdParty:{
				cardmarket: 868885,
				tcgplayer: 479931
			}
		},
		{
			type: "normal",
			stamp: ["jason-martinez"],
			thirdParty: {
				cardmarket: 868886,
				tcgplayer: 479930
			}
		}
	],

}

export default card
