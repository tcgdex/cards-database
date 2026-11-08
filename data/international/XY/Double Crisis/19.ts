import { Card } from 'models/database/card'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		'en-us': "Team Magma's Mightyena",
		'fr-fr': "Grahyèna de la Team Magma",
		'pt-br': "Mightyena da Equipe Magma",
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		262,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Team Magma's Poochyena",
		'fr-fr': "Medhyèna de la Team Magma",
		'pt-br': "Poochyena da Equipe Magma",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'pt-br': "Mordida",
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Hostile Fang",
				'fr-fr': "Croc Hostile",
				'pt-br': "Presa Hostil",
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon is a Team Aqua Pokémon, this attack does 40 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon de la Team Aqua, cette attaque inflige 40 dégâts supplémentaires.",
				'pt-br': "Se o Pokemon Ativo do seu oponente for um Pokemon da Equipe Aqua, esse ataque causará 40 de danos adicionais.",
			},
			damage: "80＋",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "This Pokémon is loyal to its master. It will protect its partner to the end, no matter what.",
	},

	thirdParty: {
		cardmarket: 282530,
		tcgplayer: 97065
	}
}

export default card
