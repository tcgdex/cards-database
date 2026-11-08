import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Quilava",
		'fr-fr': "Feurisson",
		'de-de': "Igelavar"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [156],

	hp: 80,

	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Cyndaquil",
		'fr-fr': "Héricendre"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'de-de': "Slash"
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Burning Claw",
				'fr-fr': "Griffe brûlante",
				'de-de': "Burning Claw"
			},
			effect: {
				'en-us': "You may discard a Fire Energy card attached to Quilava. If you do, the Defending Pokémon is now Burned.",
				'fr-fr': "Vous pouvez défausser une carte Énergie  attachée à Feurisson. Dans ce cas, le Pokémon Défenseur est maintenant Brûlé.",
				'de-de': "You may discard a  Energy card attached to Quilava. If you do, the Defending Pokémon is now Burned."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275828,
				tcgplayer: 88482
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275828,
				tcgplayer: 88482
			}
		},
		{
			type: "normal",
			subtype: "no-e-reader",
			thirdParty: {
				tcgplayer: 125131
			}
		},
	],

}

export default card
