import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Bramblin",
		fr: "Virovent",
		es: "Bramblin",
		it: "Bramblin",
		pt: "Bramblin"
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
			pt: "Ferroada de Espinhos"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card