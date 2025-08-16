import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [75],
	set: Set,

	name: {
		en: "Graveler",
		fr: "Gravalanch",
		es: "Graveler",
		it: "Graveler",
		pt: "Graveler",
		de: "Georok"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	evolveFrom: {
		en: "Geodude",
		fr: "Racaillou",
		es: "Geodude",
		it: "Geodude",
		pt: "Geodude",
		de: "Kleinstein"
	},

	stage: "Stage1",
	retreat: 4,
	regulationMark: "E",
	illustrator: "Masakazu Fukuda",

	description: {
		en: "It travels by rolling down cliffs. If it falls into a river, it will explode with its last gasp."
	},

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Tackle",
			fr: "Charge",
			de: "Tackle",
			es: "Placaje",
			pt: "Investida",
			it: "Azione"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Boulder Crush",
			fr: "Rocher Écrasant",
			de: "Felsenquetscher",
			es: "Alud de Rocas",
			pt: "Rocha Esmagadora",
			it: "Macignata"
		},

		damage: 70
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582718,
		tcgplayer: 253341
	}
}

export default card