import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Snubbull",
		fr: "Snubbull",
		es: "Snubbull",
		'es-mx': "Snubbull",
		de: "Snubbull",
		it: "Snubbull",
		pt: "Snubbull"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			'es-mx': "Tacleada",
			de: "Tackle",
			it: "Azione",
			pt: "Investida"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 857612
	}
}

export default card