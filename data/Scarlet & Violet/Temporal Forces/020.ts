import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [946],
	set: Set,

	name: {
		en: "Bramblin",
		fr: "Virovent",
		es: "Bramblin",
		it: "Bramblin",
		pt: "Bramblin",
		de: "Weherba"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Spike Sting",
			fr: "Pic Piquant",
			es: "Picotazo Púas",
			it: "Aculeopuntura",
			pt: "Ferroada de Espinhos",
			de: "Stachelstich"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Tetsu Kayama"
}

export default card