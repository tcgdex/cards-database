import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [374],
	set: Set,

	name: {
		en: "Steven's Beldum",
		fr: "Terhal de Pierre",
		de: "Troys Tanhel",
		it: "Beldum di Rocco",
		es: "Beldum de Máximo",
		pt: "Beldum do Steven",
		'es-mx': "Beldum de Steven"
	},


	illustrator: "Takeshi Nakamura",

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			en: "Ram",
			fr: "Collision",
			de: "Ramme",
			it: "Carica",
			es: "Apisonar",
			pt: "Aríete",
			'es-mx': "Colisión"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	],

	thirdParty: {
		cardmarket: 826017
	}
}

export default card
