import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Cinccino",
		fr: "Pashmilla",
		es: "Cinccino",
		de: "Chillabell",
		it: "Cinccino",
		pt: "Cinccino",
		'es-mx': "Cinccino"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Tail Smack",
			fr: "Coup de Queue",
			es: "Bofetón Cola",
			de: "Schweifschlag",
			it: "Codasberla",
			pt: "Ataque de Cauda",
			'es-mx': "Cachetazo de Cola"
		},

		damage: 50
	}],

	retreat: 1,
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
