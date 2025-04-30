import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Caterpie",
		fr: "Chenipan",
		es: "Caterpie",
		de: "Raupy",
		it: "Caterpie",
		pt: "Caterpie",
		'es-mx': "Caterpie"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Bug Bite",
			fr: "Piqûre",
			es: "Picadura",
			de: "Käferbiss",
			it: "Coleomorso",
			pt: "Picada",
			'es-mx': "Picadura"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
