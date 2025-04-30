import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Sentret",
		fr: "Fouinette",
		es: "Sentret",
		de: "Wiesor",
		it: "Sentret",
		pt: "Sentret",
		'es-mx': "Sentret"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Smack",
			fr: "Claque",
			es: "Palmetazo",
			de: "Klatscher",
			it: "Schiaffo",
			pt: "Estalo",
			'es-mx': "Cachetazo"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
