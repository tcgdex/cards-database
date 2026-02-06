import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [265],

	name: {
		en: "Wurmple",
		fr: "Chenipotte",
		es: "Wurmple",
		'es-mx': "Wurmple",
		de: "Waumpel",
		it: "Wurmple",
		pt: "Wurmple"
	},

	illustrator: "USGMEN",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Bug Bite",
			fr: "Piqûre",
			es: "Picadura",
			'es-mx': "Picadura",
			de: "Käferbiss",
			it: "Coleomorso",
			pt: "Picada"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675823,
		cardmarket: 869622
	}
}

export default card