import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Snover",
		fr: "Blizzi",
		es: "Snover",
		it: "Snover",
		pt: "Snover"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Corkscrew Punch",
			fr: "Poing Tire-Bouchon",
			es: "Puño Tirabuzón",
			it: "Pugno Rotante",
			pt: "Soco Saca-rolha"
		},

		damage: 30
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card