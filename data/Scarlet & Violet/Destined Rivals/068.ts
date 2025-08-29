import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [125],
	set: Set,

	name: {
		en: "Electabuzz",
		fr: "Élektek",
		de: "Elektek",
		it: "Electabuzz",
		es: "Electabuzz",
		pt: "Electabuzz",
		'es-mx': "Electabuzz"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Electroslug",
			fr: "Électro Frappe",
			de: "Elektroschuss",
			it: "Elettropugno",
			es: "Electropuñetazo",
			pt: "Soco Elétrico",
			'es-mx': "Electropuñetazo"
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
	]
}

export default card
