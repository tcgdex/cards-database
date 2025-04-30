import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Furret",
		fr: "Fouinar",
		es: "Furret",
		de: "Wiesenior",
		it: "Furret",
		pt: "Furret",
		'es-mx': "Furret"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Scratch",
			fr: "Griffe",
			es: "Arañazo",
			de: "Kratzer",
			it: "Graffio",
			pt: "Arranhão",
			'es-mx': "Arañazo"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Jet Headbutt",
			fr: "Bélier Volant",
			es: "Turbocabezazo",
			de: "Flinke Kopfnuss",
			it: "Zuccata Jet",
			pt: "Cabeçada a Jato",
			'es-mx': "Cabezazo Jet"
		},

		damage: 70
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
