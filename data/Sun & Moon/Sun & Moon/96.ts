import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Dragonite",
		fr: "Dracolosse",
	},
	illustrator: "Hiroyuki Yamamoto",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		149,
	],
	hp: 160,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Dragonair",
		fr: "Draco",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Grass",
				"Lightning",
			],
			name: {
				en: "Dragon Wave",
				fr: "Vague de Dragon",
			},
			effect: {
				en: "Discard a Grass Energy and a Lightning Energy from this Pokémon.",
				fr: "Défaussez une Énergie Grass et une Énergie Lightning de ce Pokémon.",
			},
			damage: 130,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Giant Tail",
				fr: "Longue Queue",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
			},
			damage: 200,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
