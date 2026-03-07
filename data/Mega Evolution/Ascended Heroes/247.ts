import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [885],

	name: {
		en: "Dreepy",
		fr: "Fantyrm",
		es: "Dreepy",
		'es-mx': "Dreepy",
		de: "Grolldra",
		it: "Dreepy",
		pt: "Dreepy"
	},

	illustrator: "Jerky",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Petty Grudge",
			fr: "Rancune Mesquine",
			es: "Rencor Ruin",
			'es-mx': "Rencor Ruin",
			de: "Mini-Groll",
			it: "Rancormeschino",
			pt: "Rancinho"
		},

		damage: 10
	}, {
		cost: ["Fire", "Psychic"],

		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			'es-mx': "Mordida",
			de: "Biss",
			it: "Morso",
			pt: "Mordida"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "H",

	thirdParty: {
		tcgplayer: 676059,
		cardmarket: 869858
	}
}

export default card
