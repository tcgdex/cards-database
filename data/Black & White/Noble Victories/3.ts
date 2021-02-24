import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Leavanny",
		fr: "Manternel",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		542,
	],
	hp: 130,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Swadloon",
		fr: "Couverdure",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Leaf Tailor",
				fr: "Couturier",
			},
			effect: {
				en: "Each of your Pokémon that has any Energy attached to it has no Weakness.",
				fr: "Chacun de vos Pokémon auquel de l'Énergie est attachée n'a pas de Faiblesse.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cutting Arm",
				fr: "Bras Coupant",
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
