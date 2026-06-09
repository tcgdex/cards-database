import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Vibrava δ",
		fr: "Vibraninf δ",
		de: "Vibrava"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		329,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Trapinch",
		fr: "Kraknoix"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
				de: "Biss"
			},

			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Sonic Noise",
				fr: "Bruit supersonique",
				de: "Schallender Lärm"
			},
			effect: {
				en: "If the Defending Pokémon is Pokémon-ex, that Pokémon is now Confused.",
				fr: "Si le Pokémon Défenseur est un Pokémon-ex, il est maintenant Confus.",
				de: "Wenn das Verteidigende Pokémon ein Pokémon-ex ist, ist dieses Pokémon jetzt verwirrt."
			},
			damage: 30,

		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277229
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["jun-hasebe"]
		}
	]
}

export default card
