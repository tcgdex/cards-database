import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Pinsir GX",
		fr: "Scarabrute-GX",
		de: "Pinsir-GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		127,
	],

	hp: 180,

	types: [
		"Grass",
	],

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Superpowered Horns",
				fr: "Cornes Surpuissantes",
				de: "Superstarke Hörner"
			},

			damage: 110,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Guillotine GX",
				fr: "Guillotine-GX",
				de: "Guillotine-GX"
			},
			effect: {
				en: "(You can’t use more than 1 GX attack in a game.)",
				fr: "(Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				de: "(Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 160,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 394787,
		tcgplayer: 197648
	}
}

export default card
