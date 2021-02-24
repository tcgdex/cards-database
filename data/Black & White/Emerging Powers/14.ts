import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Lilligant",
		fr: "Fragilady",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		549,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Petilil",
		fr: "Chlorobule",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Bemusing Aroma",
				fr: "Parfum Troublant",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed and Poisoned. If tails, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé et Empoisonné. Si c'est pile, le Pokémon Défenseur est maintenant Confus.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cut",
				fr: "Coupe",
			},

			damage: 60,

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
			type: "Water",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
