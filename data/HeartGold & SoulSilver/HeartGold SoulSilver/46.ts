import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Metapod",
		fr: "Chrysacier",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		11,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Caterpie",
		fr: "Chenipan",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				fr: "Bouclier vert",
			},
			effect: {
				fr: "Vos Pokémon Grass ne subissent plus la Faiblesse.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sharpen",
				fr: "Affûtage",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
