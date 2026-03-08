import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Shelgon δ",
		fr: "Drackhaus δ",
		de: "Draschel"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		372,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Bagon",
		fr: "Draby"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Tight Jaw",
				fr: "Mâchoire serrée",
				de: "Tight Jaw"
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
				"Fire",
			],
			name: {
				en: "Combustion",
				fr: "Fournaise",
				de: "Combustion"
			},

			damage: 40,

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
			type: "Fighting",
			value: "-30"
		},
		{
			type: "Fire",
			value: "-30"
		},
	],


	retreat: 2,

	thirdParty: {
		cardmarket: 276816
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

