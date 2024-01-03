import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
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

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			it: "Azione",
			pt: "Investida",
			de: "Tackle"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Boulder Crush",
			fr: "Rocher Écrasant",
			es: "Alud de Rocas",
			it: "Macignata",
			pt: "Rocha Esmagadora",
			de: "Felsenquetscher"
		},

		damage: 70
	}],

	retreat: 4,
	regulationMark: "E",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card