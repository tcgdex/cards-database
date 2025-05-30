import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Marnie's Morgrem",
		fr: "Fourbelin de Rosemary",
		de: "Marys Pelzebub",
		it: "Morgrem di Mary",
		es: "Morgrem de Roxy",
		pt: "Morgrem da Marine"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Corkscrew Punch",
			fr: "Poing Tire-Bouchon",
			de: "Korkenzieherhieb",
			it: "Pugno Rotante",
			es: "Puño Tirabuzón",
			pt: "Soco Saca-rolha"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card