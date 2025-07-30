import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [397],
	set: Set,

	name: {
		en: "Staravia",
		fr: "Étourvol",
		es: "Staravia",
		it: "Staravia",
		pt: "Staravia",
		de: "Staravia"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		en: "Starly",
		fr: "Étourmi",
		es: "Starly",
		it: "Starly",
		pt: "Starly",
		de: "Staralili"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Wing Attack",
			fr: "Cru-Ailes",
			es: "Ataque Ala",
			it: "Attacco d'Ala",
			pt: "Ataque de Asa",
			de: "Flügelschlag"
		},

		damage: 50
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
		cardmarket: 608664
	}
}

export default card