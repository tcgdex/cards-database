import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Exeggutor",
		'fr-fr': "Noadkoko",
		'de-de': "Kokowei"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		103,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Exeggcute",
		'fr-fr': "Noeufnoeuf"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Psychic Exchange",
				'fr-fr': "Échange psychique",
				'de-de': "Psychic Exchange"
			},
			effect: {
				'en-us': "Shuffle your hand into your deck. Draw up to 8 cards.",
				'fr-fr': "Mélangez votre main avec votre deck. Piochez ensuite jusqu'à 8 cartes.",
				'de-de': "Shuffle your hand into your deck. Draw up to 8 cards."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Big Eggsplosion",
				'fr-fr': "Grosse éclate",
				'de-de': "Big Eggsplosion"
			},
			effect: {
				'en-us': "Flip a coin for each Energy attached to Exeggutor. This attack does 40 damage times the number of heads",
				'fr-fr': "Lancez une pièce pour chaque Énergie attachée à Noadkoko. Cette attaque inflige 40 dégâts multipliés par le nombre de faces.",
				'de-de': "Flip a coin for each Energy attached to Exeggutor. This attack does 40 damage times the number of heads."
			},
			damage: "40x",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 276181,
				tcgplayer: 85359
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276181,
				tcgplayer: 85359
			},
		}
	]
}

export default card
