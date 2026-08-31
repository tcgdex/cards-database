import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Golem EX",
		fr: "Grolem-EX",
		de: "Geowaz-EX"
	},

	illustrator: "Toyste Beach",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		76,
	],

	hp: 180,

	types: [
		"Fighting",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Boulder Crush",
				fr: "Rocher Écrasant",
				de: "Felsenquetscher"
			},

			damage: 80,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Megaton Fall",
				fr: "Chute Mégatonne",
				de: "Megatonnenfall"
			},
			effect: {
				en: "This Pokémon does 60 damage to itself.",
				fr: "Ce Pokémon s'inflige 60 dégâts.",
				de: "Dieses Pokémon fügt sich selbst 60 Schadenspunkte zu."
			},
			damage: 180,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 288484,
		tcgplayer: 113704
	}
}

export default card
