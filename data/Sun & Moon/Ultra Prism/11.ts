import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Cherrim",
		fr: "Ceriflor",
	},
	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		421,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Cherubi",
		fr: "Ceribou",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Weather Guard",
				fr: "Protection Météo",
			},
			effect: {
				en: "Your Grass Pokémon have no Weakness.",
				fr: "Vos Pokémon Grass n’ont pas de Faiblesse.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Seed Bomb",
				fr: "Canon Graine",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
