import { Card } from 'models/database/card'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		'en-us': "Unown [E]",
		'fr-fr': "Zarbi E",
		'de-de': "Icognito E"
	},

	illustrator: "CR CG gangs",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		201,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "[Engage]",
				'fr-fr': "[Engage]",
				'de-de': "Engage"
			},
			effect: {
				'en-us': "When you play Unown E from your hand, your opponent may shuffle his or her hand into his or her deck and then draw 4 cards. Either way, you may shuffle your hand into your deck and draw 4 cards.",
				'fr-fr': "Quand vous jouez Zarbi [E] depuis votre main, votre adversaire peut mélanger sa main avec son deck et piocher 4 cartes. Vous pouvez aussi mélanger votre main avec votre deck et piocher 4 cartes.",
				'de-de': "Wenn du Icognito E aus deiner Hand ausspielst, kann dein Gegner die Karten von seiner Hand in sein Deck zurückmischen und dann vier Karten ziehen. Unabhängig davon kannst du die Karten von deiner Hand in dein Deck zurückmischen und dann vier Karten ziehen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Hidden Power",
				'fr-fr': "Puissance cachée",
				'de-de': "Kraftreserve"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.",
		'fr-fr': "Ils ressemblent à des hiéroglyphes inscrits sur d'antiques tablettes. On prétend qu'ils sont de la même origine."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274578,
				tcgplayer: 90205
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274578,
				tcgplayer: 90205
			}
		}
	]
}

export default card

