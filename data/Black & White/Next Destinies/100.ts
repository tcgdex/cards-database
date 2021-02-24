import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Emboar",
		fr: "Roitiflam",
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
		en: "Pignite",
		fr: "Grotichon",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Inferno Fandango",
				fr: "Tango Infernal",
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may attach a Fire Energy card from your hand to 1 of your Pokémon.",
				fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Fire de votre main à 1 de vos Pokémon.",
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
				en: "Heat Crash",
				fr: "Tacle Feu",
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



}

export default card
