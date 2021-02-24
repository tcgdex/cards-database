import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Ferrothorn",
		fr: "Noacier",
	},
	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,

	hp: 130,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Ferroseed",
		fr: "Grindur",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Triple Smash",
				fr: "Triple Éclate",
			},
			effect: {
				en: "Flip 3 coins. This attack does 30 damage for each heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
			},
			damage: "30×",

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Energy Slap",
				fr: "Volée Énergique",
			},
			effect: {
				en: "You may move all Energy from this Pokémon to 1 of your Benched Pokémon.",
				fr: "Vous pouvez déplacer toute l’Énergie de ce Pokémon vers l’un de vos Pokémon de Banc.",
			},
			damage: 100,

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
			type: "Grass",
			value: "-30"
		},
	],
	retreat: 2,



}

export default card
