import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Nacli",
		fr: "Selutin",
		de: "Geosali",
		it: "Nacli",
		es: "Nacli",
		pt: "Nacli",
		'es-mx': "Nacli"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Ram",
			fr: "Collision",
			de: "Ramme",
			it: "Carica",
			es: "Apisonar",
			pt: "Aríete",
			'es-mx': "Colisión"
		},

		damage: 10
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654421
	}
}

export default card