import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Cynthia's Roselia",
		fr: "Rosélia de Cynthia",
		de: "Cynthias Roselia",
		it: "Roselia di Camilla",
		es: "Roselia de Cintia",
		pt: "Roselia da Cíntia",
		'es-mx': "Roselia de Cynthia"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Spike Sting",
			fr: "Pic Piquant",
			de: "Stachelstich",
			it: "Aculeopuntura",
			es: "Picotazo Púas",
			pt: "Ferroada de Espinhos",
			'es-mx': "Piquete de Púas"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		holo: false
	}
}

export default card