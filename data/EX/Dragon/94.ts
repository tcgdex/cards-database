import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Latios ex",
		fr: "Latios ex"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		381,
	],
	hp: 100,
	types: [
		"Colorless",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Stream",
				fr: "Courant d'énergie"
			},
			effect: {
				en: "Flip a coin. If heads, search your discard pile for a basic Energy card and attach it to Latios ex.",
				fr: "Lancez une pièce. Si c'est face, cherchez dans votre deck une carte Énergie de base et attachez-la à Latios ex."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Luster Purge",
				fr: "Purge"
			},
			effect: {
				en: "Discard 3 Energy attached to Latios ex.",
				fr: "Défaussez trois Énergies attachées à Latios ex."
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
