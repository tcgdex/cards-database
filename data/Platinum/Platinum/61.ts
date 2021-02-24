import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Seviper",
		fr: "Seviper",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		336,
	],
	hp: 80,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Shed Skin",
				fr: "Mue",
			},
			effect: {
				en: "Remove 4 damage counters from Seviper.",
				fr: "Retirez à Seviper 4 marqueurs de dégât.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Bite and Escape",
				fr: "Mordre avant de s'échapper",
			},
			effect: {
				en: "You may switch Seviper with 1 of your Benched Pokémon.",
				fr: "Vous pouvez échanger Seviper avec 1 des Pokémon de votre Banc.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Paralyze Poison",
				fr: "Poison paralysant",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. Flip a coin. If heads, the Defending Pokémon is now Paralyzed and Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné. Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé et Empoisonné.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
