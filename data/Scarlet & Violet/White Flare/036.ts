import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [527],
	set: Set,

	name: {
		en: "Woobat",
		fr: "Chovsourir",
		de: "Fleknoil",
		it: "Woobat",
		pt: "Woobat",
		es: "Woobat",
		'es-mx': "Woobat"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Heart Stamp",
			fr: "Crève-Cœur",
			de: "Herzstempel",
			it: "Cuorestampo",
			pt: "Estampa de Coração",
			es: "Arrumaco",
			'es-mx': "Sello de Corazón"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card