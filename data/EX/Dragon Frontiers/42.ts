import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Vibrava δ",
		fr: "Vibraninf δ ESPÈCES DELTA"
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
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure"
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
				fr: "Bruit supersonique"
			},
			effect: {
				en: "If the Defending Pokémon is Pokémon-ex, that Pokémon is now Confused.",
				fr: "Si le Pokémon Défenseur est un Pokémon-ex, il est maintenant Confus."
			},
			damage: 30,

		},
	],






}

export default card
