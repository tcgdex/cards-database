import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Graveler",
		fr: "Gravalanch d'Alola",
		es: "Graveler de Alola",
		de: "Alola-Georok",
		it: "Graveler di Alola",
		pt: "Graveler de Alola",
		'es-mx': "Graveler de Alola"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Rolling Tackle",
			fr: "Roulé-Boulé",
			es: "Placaje Giro",
			de: "Rolltackle",
			it: "Rollazione",
			pt: "Golpe de Colisão Rolante",
			'es-mx': "Tacleada Rodante"
		},

		damage: 30
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Electric Punch",
			fr: "Poing Électrique",
			es: "Puño Eléctrico",
			de: "Elektroschlag",
			it: "Pugno Elettrico",
			pt: "Murro Elétrico",
			'es-mx': "Puño Eléctrico"
		},

		damage: 50
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
