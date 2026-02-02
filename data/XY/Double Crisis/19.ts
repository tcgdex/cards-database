import { Card } from '../../../interfaces'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		en: "Team Magma's Mightyena",
		fr: "Grahyèna de la Team Magma",
		pt: "Mightyena da Equipe Magma",
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
		en: "Team Magma's Poochyena",
		fr: "Medhyèna de la Team Magma",
		pt: "Poochyena da Equipe Magma",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
				pt: "Mordida",
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
				en: "Hostile Fang",
				fr: "Croc Hostile",
				pt: "Presa Hostil",
			},
			effect: {
				en: "If your opponent's Active Pokémon is a Team Aqua Pokémon, this attack does 40 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon de la Team Aqua, cette attaque inflige 40 dégâts supplémentaires.",
				pt: "Se o Pokemon Ativo do seu oponente for um Pokemon da Equipe Aqua, esse ataque causará 40 de danos adicionais.",
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

	thirdParty: {
		cardmarket: 282530,
		tcgplayer: 97065
	}
}

export default card
