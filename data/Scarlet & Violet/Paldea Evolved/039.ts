import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [935],
	set: Set,

	name: {
		fr: "Charbambin",
		en: "Charcadet",
		es: "Charcadet",
		it: "Charcadet",
		pt: "Charcadet",
		de: "Knarbon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Charbon Mutant",
			en: "Live Coal",
			es: "Carbón Activado",
			it: "Carboni Ardenti",
			pt: "Carvão Vivo",
			de: "Glühende Kohlen"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			fr: "Poing Magnum",
			en: "Magnum Punch",
			es: "Puño Mágnum",
			it: "Superpugno",
			pt: "Soco Magnum",
			de: "Magnum-Schlag"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "KEIICHIRO ITO",

	description: {
		en: "Burnt charcoal came to life and became a Pokémon. Possessing a fiery fighting spirit, Charcadet will battle even tough opponents.",
	},

	thirdParty: {
		cardmarket: 715512
	}
}

export default card