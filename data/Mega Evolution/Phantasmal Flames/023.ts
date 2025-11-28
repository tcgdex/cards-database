import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Swinub",
		fr: "Marcacrin",
		es: "Swinub",
		'es-mx': "Swinub",
		de: "Quiekel",
		it: "Swinub",
		pt: "Swinub"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [220],
	hp: 70,
	types: ["Water"],
	stage: "Basic",
	dexId: [220],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Stampede",
			fr: "Ruée",
			es: "Estampida",
			'es-mx': "Estampida",
			de: "Zertrampeln",
			it: "Fuggi Fuggi",
			pt: "Estouro"
		},

		damage: 10
	}, {
		cost: ["Water", "Colorless"],

		name: {
			en: "Icy Snow",
			fr: "Verglas",
			es: "Nieve Helada",
			'es-mx': "Nieve Helada",
			de: "Eisiger Schnee",
			it: "Geloneve",
			pt: "Neve Congelada"
		},

		damage: 20
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 857598
	}
}

export default card