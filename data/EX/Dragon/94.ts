import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Latios ex",
		fr: "Latios ex",
		de: "Latios ex"
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
				fr: "Courant d'énergie",
				de: "Energy Stream"
			},
			effect: {
				en: "Flip a coin. If heads, search your discard pile for a basic Energy card and attach it to Latios ex.",
				fr: "Lancez une pièce. Si c'est face, cherchez dans votre deck une carte Énergie de base et attachez-la à Latios ex.",
				de: "Flip a coin. If heads, search your discard pile for a basic Energy card and attach it to Latios ex."
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
				fr: "Purge",
				de: "Luster Purge"
			},
			effect: {
				en: "Discard 3 Energy attached to Latios ex.",
				fr: "Défaussez trois Énergies attachées à Latios ex.",
				de: "Discard 3 Energy attach to Latios EX"
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


	retreat: 2,

	thirdParty: {
		tcgplayer: 86673,
		cardmarket: 275971
	}
}

export default card
