import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [459],
	set: Set,

	name: {
		en: "Snover",
		fr: "Blizzi",
		de: "Shnebedeck",
		it: "Snover",
		es: "Snover",
		pt: "Snover",
		'es-mx': "Snover"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Light Punch",
			fr: "Poing Léger",
			de: "Leichter Hieb",
			it: "Pugnetto",
			es: "Puño Ligero",
			pt: "Soco de Luz",
			'es-mx': "Puño Ligero"
		},

		damage: 20
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Icicle",
			fr: "Concrétion Glacée",
			de: "Eiszapfen",
			it: "Stalattite",
			es: "Témpano",
			pt: "Pingente de Gelo",
			'es-mx': "Témpano de Hielo"
		},

		damage: 50
	}],

	retreat: 3,
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
		cardmarket: 825933
	}
}

export default card
