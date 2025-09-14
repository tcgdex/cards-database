import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Quagsire",
		fr: "Maraiste",
		de: "Morlord"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		195,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Wooper",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Mud Slap",
				fr: "Coud'boue",
				de: "Mud Slap"
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Whirlpool",
				fr: "Lessiveuse",
				de: "Whirlpool"
			},
			effect: {
				en: "If the Defending Pokémon has any Energy cards attached to it, choose 1 of them and discard it.",
				fr: "Si des cartes Énergie sont attachées au Pokémon Défenseur, choisissez 1 d'elle et défaussez-la.",
				de: "If the Defending Pokémon has any Energy cards attached to it, choose 1 of them and discard it."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],

	description: {
		fr: "Comme il est très insouciant et peu attentif, il se cogne dans les rochers ou les quilles des bateaux quand il nage."
	},

	thirdParty: {
		cardmarket: 274634,
		tcgplayer: 88469
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		}
	]
}

export default card

