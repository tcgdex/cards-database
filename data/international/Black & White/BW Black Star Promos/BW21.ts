import { Card } from 'models/database/card'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Emboar",
		'fr-fr': "Roitiflam",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		500,
	],
	hp: 150,
	types: [
		"Fire",
	],
	evolveFrom: {
		'en-us': "Pignite",
		'fr-fr': "Grotichon",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Inferno Fandango",
			},
			effect: {
				'en-us': "As often as you like during your turn (before your attack), you may attach a Fire Energy card from your hand to 1 of your Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heat Crash",
				'fr-fr': "Tacle Feu",
			},

			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 4,




	description: {
		'en-us': "It can throw a fire punch by setting its fists on fire with its fiery chin. It cares deeply about its friends.",
	},
}

export default card
