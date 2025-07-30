import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Charizard GX",
		fr: "Dracaufeu-GX",
	},

	illustrator: "aky CG Works",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		6,
	],

	hp: 250,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Charmeleon",
		fr: "Reptincel",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
				fr: "Lance-Flammes",
			},

			damage: 140,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flare Blitz GX",
				fr: "Boutefeu-GX",
			},
			effect: {
				en: "(You can’t use more than 1 GX attack in a game.)",
				fr: "(Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 300,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 381243,
		tcgplayer: 197651
	}
}

export default card
