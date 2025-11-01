import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [942],
	set: Set,

	name: {
		en: "Arven's Maschiff",
		fr: "Grondogue de Pepper",
		de: "Peppers Mobtiff",
		it: "Maschiff di Pepe",
		es: "Maschiff de Damián",
		pt: "Maschiff do Arven",
		'es-mx': "Maschiff de Damián"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Stampede",
			fr: "Ruée",
			de: "Zertrampeln",
			it: "Fuggi Fuggi",
			es: "Estampida",
			pt: "Estouro",
			'es-mx': "Estampida"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Confront",
			fr: "Confrontation",
			de: "Konfrontieren",
			it: "Confronto",
			es: "Confrontar",
			pt: "Confrontar",
			'es-mx': "Confrontar"
		},

		damage: 50
	}],

	retreat: 2,
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
		cardmarket: 826012
	}
}

export default card
