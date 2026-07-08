import { Card } from '../../../interfaces'
import Set from "../Misc Promos"

const card: Card = {
	name: {
		en: "Mew",
		ja: "ミュウ"
	},
	illustrator: "",
	rarity: "None",
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
				en: "Psyche",
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
		// error version 1
		{
			type: 'holo',
			subtype: 'nintedo-error',
		},
		// corrected version 1
		{
			type: 'holo',
			thirdParty: {
				tcgplayer: 108589,
			},
		},
		// version 2
		{
			type: 'holo',
			subtype: '1995-1998-copyright',
		},
		// japanese 2019 reprint
		{
			type: 'holo',
			subtype: '2019-copyright',
			thirdParty: {
				tcgplayer: 482427,
			},
		},
		// korean 2020 reprint
		{
			type: 'holo',
			subtype: '2020-copyright',
		},
	],

	description: {
		en: "New Species. Little God or Evil?",
		ja: '新種. 小さい神か悪魔'
	},
}

export default card
