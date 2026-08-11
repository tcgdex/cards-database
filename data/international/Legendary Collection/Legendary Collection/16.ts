import { Card } from 'models/database/card'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		'en-us': "Muk"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [89],

	hp: 70,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Grimer"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Toxic Gas"
			},
			effect: {
				'en-us': "Ignore all Pokémon Powers other than Toxic Gases. This power stops working while Muk is affected by a Special Condition."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Sludge"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Poisoned."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "Thickly covered with a filthy, vile sludge. It is so toxic, even its footprints contain poison."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274781,
				tcgplayer: 87618
			}
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87618,
				cardmarket: 274781
			}
		}
	],

}

export default card
