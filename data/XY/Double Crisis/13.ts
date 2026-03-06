import { Card } from '../../../interfaces'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		en: "Team Magma's Lairon",
		fr: "Galegon de la Team Magma",
		pt: "Lairon da Equipe Magma",
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		305,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Team Magma's Aron",
		fr: "Galekid de la Team Magma",
		pt: "Aron da Equipe Magma",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Gnaw",
				fr: "Ronge",
				pt: "Roída",
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Take Down",
				fr: "Bélier",
				pt: "Desmantelar",
			},
			effect: {
				en: "This Pokémon does 10 damage to itself.",
				fr: "Ce Pokémon s'inflige 10 dégâts.",
				pt: "Esse Pokémon causa 10 de danos a ele mesmo.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 282524,
		tcgplayer: 97059
	}
}

export default card
