import { Card } from '../../../interfaces'
import Set from "../Miscellaneous Promos"

const card: Card = {
	name: {
		// Ancient Mew
		ja: "エンシェントミュウ"
	},
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [151],
	hp: 30,
	types: ["Psychic"],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				ja: "サイケ",
			},
			damage: "40",
		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],

	retreat: 2,

	variants: [
		// japanese version 1 (error)
		{
			type: 'holo',
			foil: 'speckled',
			subtype: 'nintedo-error',
			thirdParty: {
				tcgplayer: 674624
			},
		},
		// japanese version 2 (cosmos)
		{
			type: 'holo',
			foil: 'cosmos',
			subtype: '1995-1998-copyright'
		},
		// japanese version 1 (corrected)
		{
			type: 'holo',
			foil: 'speckled',
		},
		// japanese 2019 reprint
		{
			type: 'holo',
			foil: 'speckled',
			subtype: '2019-copyright'
		},
		// korean 2020 reprint
		{
			type: 'holo',
			foil: 'speckled',
			subtype: '2020-copyright'
		},
	],

	description: {
		ja: '新種. 小さい神か悪魔'
	},
}

export default card
