import { Card } from '../../../interfaces'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		en: "Team Magma's Claydol",
		fr: "Kaorine de la Team Magma",
		pt: "Claydol da Equipe Magma",
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		344,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Team Magma's Baltoy",
		fr: "Balbuto de la Team Magma",
		pt: "Baltoy da Equipe Magma",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Magma Switch",
				fr: "Échange de Magma",
				pt: "Chave de Magma",
			},
			effect: {
				en: "Once during your turn (before your attack), you may move a basic Energy from 1 of your Pokémon to 1 of your Team Magma Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez déplacer une Énergie de base de l'un de vos Pokémon vers l'un de vos Pokémon de la Team Magma.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), você poderá mover uma Energia básica de 1 dos seus Pokémon para 1 dos seus Pokémon da Equipe Magma.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Power Beam",
				fr: "Puissant Rayon",
				pt: "Raio de Poder"
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

	retreat: 2,

	thirdParty: {
		cardmarket: 282522,
		tcgplayer: 97057
	}
}

export default card
