import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Lombre",
		fr: "Lombre",
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		271,
	],
	hp: 70,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Lotad",
		fr: "Nénupiot",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Torment",
				fr: "Supplice",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent can't play any Supporter cards from his or her hand during his or her next turn.",
				fr: "Lancez une pièce. Si c'est face, votre adversaire ne peut pas jouer de cartes Supporter de sa main lors de son prochain tour.",
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Absorb",
				fr: "Vol-vie",
			},
			effect: {
				en: "Remove 2 damage counters from Lombre.",
				fr: "Retirez à Lombre 2 marqueurs de dégât.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
