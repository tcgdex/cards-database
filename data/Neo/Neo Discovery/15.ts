import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Ursaring",
		fr: "Ursaring",
		de: "Ursaring"
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
				fr: "Press'tête",
				de: "Headpress"
			},

			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, this attack does nothing (not even damage).",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est Paralysé. Si c'est pile, cette attaque ne fait rien (pas même de dégâts).",
				de: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, this attack dois nothing (not even damage)."
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
				fr: "Double lasso",
				de: "Double Lariat"
			},

			effect: {
				en: "Flip 2 coins. This attack does 40 times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de faces.",
				de: "Flip 2 coins. This attack does 40 damage times the number of heads."
			},

			damage: "40x"
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
	},

	thirdParty: {
		cardmarket: 274526,
		tcgplayer: 90249
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["1st edition"]
		}
	]
}

export default card
