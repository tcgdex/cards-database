import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [453],
	set: Set,

	name: {
		en: "Croagunk",
		fr: "Cradopaud",
		es: "Croagunk",
		it: "Croagunk",
		pt: "Croagunk",
		de: "Glibunkel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Corkscrew Punch",
			fr: "Poing Tire-Bouchon",
			es: "Puño Tirabuzón",
			it: "Pugno Rotante",
			pt: "Soco Saca-rolha",
			de: "Korkenzieherhieb"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 682156
	}
}

export default card