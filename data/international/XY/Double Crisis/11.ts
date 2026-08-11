import { Card } from 'models/database/card'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		'en-us': "Team Magma's Claydol",
		'fr-fr': "Kaorine de la Team Magma",
		'pt-br': "Claydol da Equipe Magma",
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
		'en-us': "Team Magma's Baltoy",
		'fr-fr': "Balbuto de la Team Magma",
		'pt-br': "Baltoy da Equipe Magma",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Magma Switch",
				'fr-fr': "Échange de Magma",
				'pt-br': "Chave de Magma",
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may move a basic Energy from 1 of your Pokémon to 1 of your Team Magma Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez déplacer une Énergie de base de l'un de vos Pokémon vers l'un de vos Pokémon de la Team Magma.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), você poderá mover uma Energia básica de 1 dos seus Pokémon para 1 dos seus Pokémon da Equipe Magma.",
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
				'en-us': "Power Beam",
				'fr-fr': "Puissant Rayon",
				'pt-br': "Raio de Poder"
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

	description: {
		'en-us': "Claydol's beam can seize opponents and keep them from moving. Long-range attacks are its specialty!",
	},

	thirdParty: {
		cardmarket: 282522,
		tcgplayer: 97057
	}
}

export default card
