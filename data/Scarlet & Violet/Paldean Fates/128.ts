import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Frigibax",
		fr: "Frigodo",
		es: "Frigibax",
		it: "Frigibax",
		pt: "Frigibax"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Collect",
			fr: "Collecte",
			es: "Coleccionar",
			it: "Tassa",
			pt: "Coleta"
		},

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
			es: "Roba 1 carta.",
			it: "Pesca una carta.",
			pt: "Compre uma carta."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			en: "Beat",
			fr: "Bataille",
			es: "Toque",
			it: "Battuta",
			pt: "Pulso"
		},

		damage: 20
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card