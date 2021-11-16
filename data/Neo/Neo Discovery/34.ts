import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Ursaring",
		fr: "Ursaring"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		217,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Teddiursa",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],

			name: {
				en: "Headpress",
				fr: "Press'tête"
			},

			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, this attack does nothing (not even damage).",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est Paralysé. Si c'est pile, cette attaque ne fait rien (pas même de dégâts)."
			},

			damage: 20
		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],

			name: {
				en: "Double Lariat",
				fr: "Double lasso"
			},

			effect: {
				en: "Flip 2 coins. This attack does 40 times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de faces."
			},

			damage: "40×"
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	description: {
		fr: "Il sait monter aux arbres, mais il préfère casser les troncs avec ses pattes avant pour manger les baies qui sont tombées."
	}
}

export default card
