import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "N's Zorua",
		fr: "Zorua de N",
		es: "Zorua de N",
		de: "Ns Zorua",
		it: "Zorua di N",
		pt: "Zorua do N",
		'es-mx': "Zorua de N"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Scratch",
			fr: "Griffe",
			es: "Arañazo",
			de: "Kratzer",
			it: "Graffio",
			pt: "Arranhão",
			'es-mx': "Arañazo"
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
