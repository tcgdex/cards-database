import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Torchic",
		fr: "Poussifeu",
		de: "Flemmli",
		it: "Torchic",
		es: "Torchic",
		pt: "Torchic"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Collect",
			fr: "Collecte",
			de: "Sammeln",
			it: "Tassa",
			es: "Coleccionar",
			pt: "Coleta"
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
		cost: ["Fire"],

		name: {
			en: "Combustion",
			fr: "Fournaise",
			de: "Glühen",
			it: "Fuoco Continuo",
			es: "Combustión",
			pt: "Combustão"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card