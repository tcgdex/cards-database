import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Probopass",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		476,
	],

	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Nosepass",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Competitiveness",
			},
			effect: {
				en: "If you don't have a Supporter card in play, each of Probopass's attacks does 30 more damage to the Active Pokémon (before applying Weakness and Resistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Top Chop",
			},
			effect: {
				en: "Draw a card.",
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tumbling Attack",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 50 damage plus 30 more damage.",
			},
			damage: "50+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
