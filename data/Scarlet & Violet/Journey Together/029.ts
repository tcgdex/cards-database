import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Volcarona",
		fr: "Pyrax",
		es: "Volcarona",
		de: "Ramoth",
		it: "Volcarona",
		pt: "Volcarona",
		'es-mx': "Volcarona"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			en: "Smoldering Scales",
			fr: "Écailles Ardentes",
			es: "Escamas Ardientes",
			de: "Glühender Flügelstaub",
			it: "Scaglie Ardenti",
			pt: "Escamas Escaldantes",
			'es-mx': "Escamas Ardientes"
		},

		damage: 80
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
