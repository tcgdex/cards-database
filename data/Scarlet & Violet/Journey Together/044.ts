import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	dexId: [74],
	set: Set,

	name: {
		en: "Alolan Geodude",
		fr: "Racaillou d'Alola",
		es: "Geodude de Alola",
		de: "Alola-Kleinstein",
		it: "Geodude di Alola",
		pt: "Geodude de Alola",
		'es-mx': "Geodude de Alola"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Knuckle Punch",
			fr: "Coud'Phalange",
			es: "Puño con Nudillos",
			de: "Knöchelhieb",
			it: "Noccapugno",
			pt: "Soco com Punho",
			'es-mx': "Puño con Nudillos"
		},

		damage: 10
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Tiny Charge",
			fr: "Décharge Mineure",
			es: "Carga Diminuta",
			de: "Mini-Stromstoß",
			it: "Sottocarica Minuscola",
			pt: "Carga Pequenina",
			'es-mx': "Minicarga"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "H",
	illustrator: "svlt",

	thirdParty: {
		cardmarket: 817196
	}
}

export default card