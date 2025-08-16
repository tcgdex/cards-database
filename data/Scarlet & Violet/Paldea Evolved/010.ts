import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [459],
	set: Set,

	name: {
		fr: "Blizzi",
		en: "Snover",
		es: "Snover",
		it: "Snover",
		pt: "Snover",
		de: "Shnebedeck"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			fr: "Poing Tire-Bouchon",
			en: "Corkscrew Punch",
			es: "Puño Tirabuzón",
			it: "Pugno Rotante",
			pt: "Soco Saca-rolha",
			de: "Korkenzieherhieb"
		},

		damage: 30
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Taira Akitsu",

	thirdParty: {
		cardmarket: 715482
	}
}

export default card