import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Litleo",
		fr: "Hélionceau",
		es: "Litleo",
		it: "Litleo",
		pt: "Litleo",
		de: "Leufeo"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",
	illustrator: "Misa Tsutsui",

	attacks: [{
		name: {
			en: "Live Coal",
			fr: "Charbon Mutant",
			es: "Carbón Activado",
			it: "Carboni Ardenti",
			pt: "Live Coal",
			de: "Glühende Kohlen"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,

	description: {
		en: "This hot-blooded Pokémon is filled with curiosity. When it gets angry or starts fighting, its short mane gets hot."
	},

	dexId: [667]
}

export default card