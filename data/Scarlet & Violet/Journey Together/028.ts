import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Larvesta",
		fr: "Pyronille",
		es: "Larvesta",
		de: "Ignivor",
		it: "Larvesta",
		pt: "Larvesta",
		'es-mx': "Larvesta"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Will-O-Wisp",
			fr: "Feu Follet",
			es: "Fuego Fatuo",
			de: "Irrlicht",
			it: "Fuocofatuo",
			pt: "Fogo Fátuo",
			'es-mx': "Fuego Fatuo"
		},

		damage: 10
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
