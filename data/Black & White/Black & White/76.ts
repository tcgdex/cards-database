import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Klinklang",
		fr: "Cliticlic",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		601,
	],
	hp: 140,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Klang",
		fr: "Clic",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Shift Gear",
			},
			effect: {
				en: "As often as you would like during your turn (before your attack), you may move a Metal Energy attached to 1 of your Pokémon to another of your Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gear Grind",
				fr: "Lancécrou",
			},
			effect: {
				en: "Flip 2 coins. This attack does 80 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 80 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
