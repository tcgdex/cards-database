import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Clawitzer",
		fr: "Gamblast",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		693,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Clauncher",
		fr: "Flingouste",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Reverse Thrust",
				fr: "Poussée Inverse",
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Splash Cannon",
				fr: "Canon Éclaboussant",
			},
			effect: {
				en: "This attack does 20 more damage for each Water Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
