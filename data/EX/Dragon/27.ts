import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Flaaffy",
		fr: "Lainergie",
		de: "Waaty"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		180,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Mareep",
		fr: "Wattouat"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Energy Recall",
				fr: "Rappel d'énergie",
				de: "Energierückgewinnung"
			},
			effect: {
				en: "Attach up to 2 basic Energy cards from your discard pile to Flaaffy.",
				fr: "Attachez à Lainergie jusqu'à deux cartes Énergie de base de votre pile de défausse.",
				de: "Lege bis zu 2 Basis-Energiekarten aus deinem Ablagestapel an Waaty an."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Lightning Ball",
				fr: "Boule éclair",
				de: "Kugelblitz"
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

	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 275904,
		tcgplayer: 85476
	}
}

export default card
