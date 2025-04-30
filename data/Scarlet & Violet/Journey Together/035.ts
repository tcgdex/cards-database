import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Lotad",
		fr: "Nénupiot",
		es: "Lotad",
		de: "Loturzel",
		it: "Lotad",
		pt: "Lotad",
		'es-mx': "Lotad"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
			es: "Pistola Agua",
			de: "Aquaknarre",
			it: "Pistolacqua",
			pt: "Revólver d'Água",
			'es-mx': "Chorro de Agua"
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
