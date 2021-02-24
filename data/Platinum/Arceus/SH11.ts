import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Ponyta",
	},
	illustrator: "Kanako Eo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		77,
	],

	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Star Barrier",
			},
			effect: {
				en: "As long as Ponyta has any Energy attached to it, Ponyta has no Weakness.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Blue Fire",
			},
			effect: {
				en: "Discard all Fire Energy attached to Ponyta.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
