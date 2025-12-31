import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Poliwrath",
		fr: "Tartard",
		de: "Quappo"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		62,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Poliwhirl",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Corkscrew Punch",
				fr: "Poing tire-bouchon",
				de: "Corkscrew Punch"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Submission",
				fr: "Sacrifice",
				de: "Submission"
			},
			effect: {
				en: "Poliwrath does 20 damage to itself.",
				fr: "Tartard s'inflige 20 dégâts.",
				de: "Poliwrath does 20 damage to itself"
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Bien qu'excellent nageur qui utilise tous ses muscles, il vit sur la terre ferme."
	},

	thirdParty: {
		cardmarket: 274520,
		tcgplayer: 88269
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["1st-edition"]
		}
	]
}

export default card
