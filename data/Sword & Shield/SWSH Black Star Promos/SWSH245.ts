import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Cradopaud",
		de: "Glibunkel",
		es: "Croagunk",
		pt: "Croagunk",
		it: "Croagunk",
		en: "Croagunk"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			fr: "Poing Tire-Bouchon",
			de: "Korkenzieherhieb",
			es: "Puño Tirabuzón",
			pt: "Soco Saca-rolha",
			it: "Pugno Rotante",
			en: "Corkscrew Punch"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "E",

	description: {
		en: "Once diluted, its poison becomes medicinal. This Pokémon came into popularity after a pharmaceutical company chose it as a mascot."
	}
}

export default card