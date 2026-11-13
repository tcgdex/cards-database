import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Frillish",
		fr: "Viskuse",
		de: "Quabbel",
		es: "Frillish",
		it: "Frillish",
		pt: "Frillish",
		'es-mx': "Frillish"
	},

	illustrator: "Mousho",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Hook",
			fr: "Crochet",
			de: "Haken",
			es: "Garfio",
			it: "Uncino",
			pt: "Gancho",
			'es-mx': "Gancho"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 727579,
		cardmarket: 918842
	}
}

export default card