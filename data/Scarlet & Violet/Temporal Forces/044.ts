import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Keldeo",
		fr: "Keldeo",
		es: "Keldeo",
		it: "Keldeo",
		pt: "Keldeo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Rapid Draw",
			fr: "Pioche Rapide",
			es: "Robo Rápido",
			it: "Pescalesto",
			pt: "Retirada Rápida"
		},

		effect: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
			es: "Roba 2 cartas.",
			it: "Pesca due carte.",
			pt: "Compre 2 cartas."
		},

		damage: 20
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Aqua Blade",
			fr: "Hydrolame",
			es: "Hoja Agua",
			it: "Idrolama",
			pt: "Lâmina de Água"
		},

		damage: 110
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card