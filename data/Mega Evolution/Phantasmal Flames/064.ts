import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Sandile",
		fr: "Mascaïman",
		es: "Sandile",
		'es-mx': "Sandile",
		de: "Ganovil",
		it: "Sandile",
		pt: "Sandile"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Ram",
			fr: "Collision",
			es: "Apisonar",
			'es-mx': "Colisión",
			de: "Ramme",
			it: "Carica",
			pt: "Aríete"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Rear Kick",
			fr: "Ruade",
			es: "Patada Trasera",
			'es-mx': "Patada Trasera",
			de: "Rückwärtskick",
			it: "Retrocalcio",
			pt: "Chute Traseiro"
		},

		damage: 20
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card