import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Meltan",
		fr: "Meltan",
		es: "Meltan",
		it: "Meltan",
		pt: "Meltan",
		de: "Meltan"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 80,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Metal"],

		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			es: "Golpe Cabeza",
			it: "Bottintesta",
			pt: "Cabeçada",
			de: "Kopfnuss"
		},

		damage: 50
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card