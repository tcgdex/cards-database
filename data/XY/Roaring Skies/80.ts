import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Unfezant",
		fr: "Déflaisan",
	},
	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		521,
	],
	hp: 130,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Tranquill",
		fr: "Colombeau",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Quick Attack",
				fr: "Vive-Attaque",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: "30+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Strong Winds",
				fr: "Vents Tourbillonnants",
			},
			effect: {
				en: "Shuffle all cards attached to each player’s Pokémon into that player’s deck.",
				fr: "Mélangez toutes les cartes attachées aux Pokémon de chaque joueur au deck de ce joueur.",
			},

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
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
