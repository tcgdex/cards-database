import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Wattrel",
		fr: "Zapétrel",
		de: "Voltrel",
		it: "Wattrel",
		es: "Wattrel",
		pt: "Wattrel"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Lightning"],
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
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Glide",
			fr: "Glissement",
			de: "Gleiten",
			it: "Aliante",
			es: "Planeo",
			pt: "Planeio"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card