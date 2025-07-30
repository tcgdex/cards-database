import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [690],
	set: Set,

	name: {
		en: "Skrelp",
		fr: "Venalgue",
		es: "Skrelp",
		it: "Skrelp",
		pt: "Skrelp",
		de: "Algitt"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			it: "Azione",
			pt: "Investida",
			de: "Tackle"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Melt",
			fr: "Dissolution",
			es: "Derretir",
			it: "Liquefazione",
			pt: "Derreter",
			de: "Schmelzen"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 691799,
		tcgplayer: 478220
	}
}

export default card