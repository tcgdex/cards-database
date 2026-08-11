import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Magma's Houndour",
		'fr-fr': "Malosse de Team Magma",
		'de-de': "Team Magmas Hunduster"
	},

	illustrator: "Atsuko Ujiie",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [228],

	hp: 50,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Kick Away",
				'fr-fr': "Coud' pied éjecteur",
				'de-de': "Kick Away"
			},
			effect: {
				'en-us': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any.",
				'fr-fr': "Votre adversaire échange le Pokémon Défenseur avec 1 des Pokémon de son Banc, s'il en a.",
				'de-de': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Steady Firebreathing",
				'fr-fr': "Crachage de feu régulier",
				'de-de': "Steady Firebreathing"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275840,
				tcgplayer: 89832
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275840,
				tcgplayer: 89832
			}
		},
	],

}

export default card
