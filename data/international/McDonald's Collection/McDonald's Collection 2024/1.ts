import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2024'

const card: Card = {
	name: {
		'en-us': "Charizard",
		'fr-fr': "Dracaufeu",
		'es-es': "Charizard",
		'it-it': "Charizard",
		'pt-br': "Charizard",
		'de-de': "Glurak"
	},

	illustrator: "Ryuta Fuse",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [6],

	hp: 170,

	types: ["Fire"],

	stage: "Stage2",

	evolveFrom: {
		'en-us': "Charmeleon",
		'fr-fr': "Reptincel",
		'es-es': "Charmeleon",
		'it-it': "Charmeleon",
		'pt-br': "Charmeleon",
		'de-de': "Glutexo"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Battle Sense"
			},
			effect: {
				'en-us': "Once during your turn, you may look at the top 3 cards of your deck and put 1 of them into your hand. Discard the other cards."
			}
		}
	],

	attacks: [
		{
			cost: ["Fire", "Fire"],
			name: {
				'en-us': "Royal Blaze",
			},
			damage: "100+",
			effect: {
				'en-us': "This attack does 50 more damage for each Leon card in your discard pile.",
			},
		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 802823,
				tcgplayer: 614370
			}
		}
	]
}

export default card

