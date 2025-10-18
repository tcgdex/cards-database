import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Magnemite",
		fr: "Magnéti",
		de: "Magnetilo",
		it: "Magnemite",
		es: "Magnemite",
		pt: "Magnemite",
		'es-mx': "Magnemite"
	},

	illustrator: "Krgc",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",
	dexId: [81],

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Beam",
			fr: "Rayon",
			de: "Strahl",
			it: "Raggio",
			es: "Transmisión",
			pt: "Feixe",
			'es-mx': "Rayo"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654384
	}
}

export default card