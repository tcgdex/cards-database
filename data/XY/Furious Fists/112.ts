import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "M Heracross EX",
		fr: "M-Scarhino EX",
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		214,
	],

	hp: 220,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Heracross-EX",
		fr: "Scarhino-EX",
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Big Bang Horn",
				fr: "Corne Big Bang",
			},
			effect: {
				en: "This attack does 180 damage minus 10 damage for each damage counter on this Pokémon.",
				fr: "Cette attaque inflige 180 dégâts moins 10 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
			},
			damage: "180−",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,
	suffix: "EX"
}

export default card
