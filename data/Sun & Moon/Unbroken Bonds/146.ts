import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Fearow",
		fr: "Rapasdepic",
	},
	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		22,
	],
	hp: 100,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Spearow",
		fr: "Piafabec",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Drill Run Double",
				fr: "Double Tunnelier",
			},
			effect: {
				en: "Flip a coin. If heads, discard 2 Energy from your opponent's Active Pokémon.",
				fr: "Lancez une pièce. Si c’est face, défaussez 2 Énergies du Pokémon Actif de votre adversaire.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
