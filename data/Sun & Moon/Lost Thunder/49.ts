import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Victini",
		fr: "Victini",
	},
	illustrator: "sowsow",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		494,
	],
	hp: 70,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "V-Beatdown",
				fr: "Dérouillée Victoire",
			},
			effect: {
				en: "This attack does 20 damage for each of your Basic Pokémon in play.",
				fr: "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon de base en jeu.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
