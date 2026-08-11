import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Furret",
		'fr-fr': "Fouinar",
		'de-de': "Wiesenior"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [162],

	hp: 70,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Sentret",
		'fr-fr': "Fouinette"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Scavenger Hunt",
				'fr-fr': "Chasse au trésor",
				'de-de': "Scavenger Hunt"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may put 2 cards from your hand into your deck. Then, search your deck for an Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can't be used if Furret is affected by a Special Condition.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez remettre 2 cartes de votre main dans votre deck. Ensuite, cherchez une carte Énergie dans votre deck, montrez-la à votre adversaire et ajoutez-la à votre main. Mélangez ensuite votre deck. Ce pouvoir ne peut pas être utilisé si Fouinar est affecté par un État spécial.",
				'de-de': "Once during your turn (before your attack), you may put 2 cards from your hand into your deck. Then, search your deck for an Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can´t be used if Furret is affected by a Special Condition."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Spinning Attack",
				'fr-fr': "Attaque tournante",
				'de-de': "Spinning Attack"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 85590,
				cardmarket: 275120
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 85590,
				cardmarket: 275120
			}
		},
	]
}

export default card
