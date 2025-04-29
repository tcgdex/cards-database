import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Metang",
		fr: "Métang",
		es: "Metang",
		de: "Metang",
		it: "Metang",
		pt: "Metang",
		'es-mx': "Metang"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Psypunch",
			fr: "Coup de Poing Psy",
			es: "Psicopuño",
			de: "Psyhieb",
			it: "Psicopugno",
			pt: "Soco Psíquico",
			'es-mx': "Psicopuño"
		},

		damage: 30
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Zen Headbutt",
			fr: "Psykoud'Boul",
			es: "Cabezazo Zen",
			de: "Zen-Kopfstoß",
			it: "Cozzata Zen",
			pt: "Cabeçada Zen",
			'es-mx': "Cabezazo Zen"
		},

		damage: 50
	}],

	retreat: 2,
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
