import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Zorua",
		fr: "Zorua",
		de: "Zorua",
		es: "Zorua",
		it: "Zorua",
		'es-mx': "Zorua"
	},

	illustrator: "Atsuya Uki",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Darkness Fang",
			fr: "Croc Obscur",
			de: "Fänge der Dunkelheit",
			es: "Colmillo de Oscuridad",
			it: "Oscurizanna",
			'es-mx': "Colmillo de Oscuridad"
		},

		damage: 40,
		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1
}

export default card