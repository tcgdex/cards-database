import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Salandit",
		fr: "Tritox",
		es: "Salandit",
		'es-mx': "Salandit",
		de: "Molunk",
		it: "Salandit",
		pt: "Salandit"
	},

	illustrator: "Kazuhisa Uragami",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Fire Claws",
			fr: "Griffes Enflammées",
			es: "Garras de Fuego",
			'es-mx': "Garras de Fuego",
			de: "Feuerkrallen",
			it: "Artigli Infuocati",
			pt: "Garras de Fogo"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "J"
}

export default card