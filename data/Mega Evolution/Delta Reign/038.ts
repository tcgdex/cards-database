import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Pawmo",
		fr: "Pohmotte",
		de: "Pamamo",
		es: "Pawmo",
		it: "Pawmo",
		pt: "Pawmo",
		'es-mx': "Pawmo"
	},

	illustrator: "Susumu Maeya",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Electro Ball",
			fr: "Boule Élek",
			de: "Elektroball",
			es: "Bola Voltio",
			it: "Energisfera",
			pt: "Bola Elétrica",
			'es-mx': "Electrobola"
		},

		damage: 40,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,

	thirdParty: {
		tcgplayer: 727584,
		cardmarket: 918855
	}
}

export default card