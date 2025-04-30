import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Cufant",
		fr: "Charibari",
		es: "Cufant",
		de: "Kupfanti",
		it: "Cufant",
		pt: "Cufant",
		'es-mx': "Cufant"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Rollout",
			fr: "Roulade",
			es: "Rodar",
			de: "Walzer",
			it: "Rotolamento",
			pt: "Rolagem",
			'es-mx': "Rodada"
		},

		damage: 80
	}],

	retreat: 3,
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
