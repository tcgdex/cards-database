import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Raichu",
		fr: "Raichu",
		de: "Raichu"
	},

	illustrator: "Masako Yamashita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		26,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Pikachu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thundershock",
				fr: "Éclair",
				de: "Thundershock"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],

			name: {
				en: "Lightning Strike",
				fr: "Frap'éclair",
				de: "Lightning Strike"
			},

			effect: {
				en: "You may discard all Energy cards attached to Raichu. If you do, this attack does 80 damage.",
				fr: "Vous pouvez défausser toutes les cartes Énergie  attachées à Raichu. Si vous le faites, cette attaque inflige 80 dégâts.",
				de: "You may discard all @energie cards attached to Raichu. If you do, this attack does 80 damage."
			},

			damage: 40
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	description: {
		fr: "Si les poches électriques de ses joues sont complètement chargées, ses deux oreilles se dressent sur sa tête."
	},

	thirdParty: {
		cardmarket: 274607,
		tcgplayer: 88500
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

