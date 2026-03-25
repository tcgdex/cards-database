import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Pikachu Libre)'

const card: Card = {
	dexId: [466],
	set: Set,

	name: {
		en: "Electivire",
		fr: "Élekable",
		es: "Electivire",
		it: "Electivire",
		pt: "Electivire",
		de: "Elevoltek"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],

	evolveFrom: {
		en: "Electabuzz",
		fr: "Élektek",
		es: "Electabuzz",
		it: "Electabuzz",
		pt: "Electabuzz",
		de: "Elektek"
	},

	stage: "Stage1",
	retreat: 3,

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Coud'Phalange",
			},
			damage: "30",
		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				fr: "Électro Frappe",
			},
			damage: "90",
		},
	],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	thirdParty: {
		tcgplayer: 118810
	}
}

export default card