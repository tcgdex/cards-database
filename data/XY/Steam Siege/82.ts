import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Xerneas BREAK",
		fr: "Xerneas TURBO",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		716,
	],
	hp: 150,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Xerneas",
		fr: "Xerneas",
	},
	stage: "BREAK",


	attacks: [
		{
			cost: [
				"Fairy",
				"Fairy",
			],
			name: {
				en: "Life Stream",
				fr: "Règle des Évolutions TURBO",
			},
			effect: {
				en: "This attack does 20 damage times the amount of Energy attached to all of your Pokémon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fairy",
				"Fairy",
			],
			name: {
				fr: "Flux Vital",
			},
			effect: {
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre d’Énergies attachées à tous vos Pokémon.",
			},
			damage: "20×",

		},
	],






}

export default card
