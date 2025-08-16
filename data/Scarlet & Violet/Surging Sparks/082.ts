import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [562],
	set: Set,

	name: {
		en: "Yamask",
		fr: "Tutafeh",
		es: "Yamask",
		it: "Yamask",
		pt: "Yamask",
		de: "Makabaja"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Mumble",
			fr: "Murmure",
			es: "Farfullar",
			it: "Borbottio",
			pt: "Resmungo",
			de: "Grummeln"
		},

		damage: 10
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Petty Grudge",
			fr: "Rancune Mesquine",
			es: "Rencor Ruin",
			it: "Rancormeschino",
			pt: "Rancinho",
			de: "Mini-Groll"
		},

		damage: 20
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "IKEDA Saki"
}

export default card
