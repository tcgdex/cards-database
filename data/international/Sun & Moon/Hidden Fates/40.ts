import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Clefable",
		fr: "Mélodelfe",
	},

	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		36,
	],

	hp: 120,

	types: [
		"Fairy",
	],

	evolveFrom: {
		en: "Clefairy",
		fr: "Mélofée",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Pound",
				fr: "Écras’Face",
			},

			damage: 40,

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Moon Impact",
				fr: "Impact Lunaire",
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		en: "It can't help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren't many people or Pokémon.",
	},

	thirdParty: {
		cardmarket: 394667,
		tcgplayer: 197684
	}
}

export default card
