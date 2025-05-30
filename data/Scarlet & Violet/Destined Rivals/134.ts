import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Marnie's Impidimp",
		fr: "Grimalin de Rosemary",
		de: "Marys Bähmon",
		it: "Impidimp di Mary",
		es: "Impidimp de Roxy",
		pt: "Impidimp da Marine"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Filch",
			fr: "Maraudage",
			de: "Mopsen",
			it: "Furtarello",
			es: "Birlar",
			pt: "Furtar"
		},

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
			de: "Ziehe 1 Karte.",
			it: "Pesca una carta.",
			es: "Roba 1 carta.",
			pt: "Compre uma carta."
		}
	}, {
		cost: ["Darkness"],

		name: {
			en: "Corkscrew Punch",
			fr: "Poing Tire-Bouchon",
			de: "Korkenzieherhieb",
			it: "Pugno Rotante",
			es: "Puño Tirabuzón",
			pt: "Soco Saca-rolha"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card