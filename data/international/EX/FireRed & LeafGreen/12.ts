import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Raichu",
		'fr-fr': "Raichu",
		'de-de': "Raichu"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		26,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Recharge",
				'fr-fr': "Recharger",
				'de-de': "Auffüllen"
			},
			effect: {
				'en-us': "Search your deck for up to 2 Lightning Energy cards and attach them to Raichu. Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Énergie  et attachez-les à Raichu. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach bis zu 2  - Energiekarten und lege sie an Raichu an. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Thunder Reflection",
				'fr-fr': "Coup d'tonnerre",
				'de-de': "Donnerspiegelung"
			},
			effect: {
				'en-us': "You may move any number of Lightning Energy cards attached to Raichu to another of your Pokémon.",
				'fr-fr': "Vous pouvez déplacer autant de cartes Énergie  attachées à Raichu que vous le voulez sur un autre de vos Pokémon.",
				'de-de': "Du kannst beliebig viele an Raichu angelegte  - Energiekarten an ein anderes deiner Pokémon anlegen."
			},
			damage: 50,

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
			type: "holo",
			thirdParty: {
				cardmarket: 276188,
				tcgplayer: 88507
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276188,
				tcgplayer: 88507
			},
		}
	]
}

export default card
