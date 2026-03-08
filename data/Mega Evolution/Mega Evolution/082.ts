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
	dexId: [932],

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

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		tcgplayer: 654421,
		cardmarket: 851153
	}
}

export default card