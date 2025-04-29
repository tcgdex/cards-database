import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Piloswine",
		fr: "Cochignon",
		es: "Piloswine",
		de: "Keifel",
		it: "Piloswine",
		pt: "Piloswine",
		'es-mx': "Piloswine"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Strength",
			fr: "Force",
			es: "Fuerza",
			de: "Stärke",
			it: "Forza",
			pt: "Força",
			'es-mx': "Fuerza"
		},

		damage: 20
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Impaling Tusk",
			fr: "Défense Empaleuse",
			es: "Colmillo Empalador",
			de: "Durchbohrender Stoßzahn",
			it: "Zanne Acuminate",
			pt: "Presa Perfurante",
			'es-mx': "Colmillo Perforante"
		},

		damage: 50
	}],

	retreat: 3,
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
