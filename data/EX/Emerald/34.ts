import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Linoone",
		fr: "Lineon",
		de: "Geradaks"
	},

	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		264,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Zigzagoon",
		fr: "Zigzaton"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Body Slam",
				fr: "Plaquage",
				de: "Body Slam"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Claw Swipe",
				fr: "Combo-serres",
				de: "Claw Swipe"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 0,

	thirdParty: {
		tcgplayer: 86806,
		cardmarket: 276545
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
