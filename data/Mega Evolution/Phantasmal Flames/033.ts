import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Pawmo",
		fr: "Pohmotte",
		es: "Pawmo",
		'es-mx': "Pawmo",
		de: "Pamamo",
		it: "Pawmo",
		pt: "Pawmo"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			en: "Electric Punch",
			fr: "Poing Électrique",
			es: "Puño Eléctrico",
			'es-mx': "Puño Eléctrico",
			de: "Elektroschlag",
			it: "Pugno Elettrico",
			pt: "Murro Elétrico"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 857608
	}
}

export default card