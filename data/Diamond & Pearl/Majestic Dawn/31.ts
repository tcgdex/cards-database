import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Toxicroak",
		fr: "Coatox",
	},
	illustrator: "Kent Kanetsuna",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		454,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Croagunk",
		fr: "Cradopaud",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Paralyze Poison",
				fr: "Poison paralysant",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. Flip a coin. If heads, the Defending Pokémon is now Paralyzed and Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné. Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé et Empoisonné.",
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
				en: "Slash",
				fr: "Tranche",
			},

			damage: 60,

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
