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
		pt: "Impidimp da Marine",
		'es-mx': "Impidimp de Marnie"
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
			pt: "Furtar",
			'es-mx': "Hurtar"
		},

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
			de: "Ziehe 1 Karte.",
			it: "Pesca una carta.",
			es: "Roba 1 carta.",
			pt: "Compre uma carta.",
			'es-mx': "Roba 1 carta."
		}
	}, {
		cost: ["Darkness"],

		name: {
			en: "Corkscrew Punch",
			fr: "Poing Tire-Bouchon",
			de: "Korkenzieherhieb",
			it: "Pugno Rotante",
			es: "Puño Tirabuzón",
			pt: "Soco Saca-rolha",
			'es-mx': "Puño Sacacorchos"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		holo: false
	}
}

export default card