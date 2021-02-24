import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Inteleon VMAX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		888,
	],
	hp: 320,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Inteleon V",
	},
	stage: "VMAX",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Hydro Snipe",
			},
			effect: {
				en: "You may put an Energy attached to your opponent's Active Pokémon into their hand.",
			},
			damage: 60,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Max Bullet",
			},
			effect: {
				en: "This attack also does 60 damage to 1 of your opponent's Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 160,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
