import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [125],
	set: Set,

	name: {
		en: "Electabuzz",
		fr: "Élektek",
		es: "Electabuzz",
		it: "Electabuzz",
		pt: "Electabuzz",
		de: "Elektek"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Chop",
			fr: "Coup Tranchant",
			es: "Cortar",
			it: "Ceffone",
			pt: "Trincar",
			de: "Hacker"
		},

		damage: 20
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Electric Punch",
			fr: "Poing Électrique",
			es: "Puño Eléctrico",
			it: "Pugno Elettrico",
			pt: "Murro Elétrico",
			de: "Elektroschlag"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "Uta",

	thirdParty: {
		cardmarket: 760683
	}
}

export default card