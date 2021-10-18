import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Pikachu Libre)'

const card: Card = {
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

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}]
}

export default card