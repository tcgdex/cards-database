import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Nosepass",
		fr: "Tarinor",
		de: "Nasgnet",
		it: "Nosepass",
		es: "Nosepass",
		pt: "Nosepass"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			de: "Kopfnuss",
			it: "Bottintesta",
			es: "Golpe Cabeza",
			pt: "Cabeçada"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Rock Throw",
			fr: "Jet-Pierres",
			de: "Steinwurf",
			it: "Sassata",
			es: "Lanzarrocas",
			pt: "Lançamento de Rocha"
		},

		damage: 40
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card