import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Stufful",
		fr: "Nounourson",
		de: "Velursi",
		it: "Stufful",
		es: "Stufful",
		pt: "Stufful",
		'es-mx': "Stufful"
	},

	illustrator: "OKACHEKE",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",
	dexId: [759],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Light Punch",
			fr: "Poing Léger",
			de: "Leichter Hieb",
			it: "Pugnetto",
			es: "Puño Ligero",
			pt: "Soco de Luz",
			'es-mx': "Puño Ligero"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Flop",
			fr: "Flop",
			de: "Plumps",
			it: "Tonfo",
			es: "Vuelta",
			pt: "Baque",
			'es-mx': "Desplome"
		},

		damage: 20
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654493
	}
}

export default card