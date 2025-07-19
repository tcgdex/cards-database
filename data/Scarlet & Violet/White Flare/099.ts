import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	set: Set,

	name: {
		en: "Pansear",
		fr: "Flamajou",
		de: "Grillmak",
		it: "Pansear",
		pt: "Pansear",
		es: "Pansear",
		'es-mx': "Pansear"
	},

	rarity: "Illustration rare",
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
			pt: "Coleta",
			es: "Coleccionar",
			'es-mx': "Recolectar"
		},

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
			de: "Ziehe 1 Karte.",
			it: "Pesca una carta.",
			pt: "Compre uma carta.",
			es: "Roba 1 carta.",
			'es-mx': "Roba 1 carta."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Scratch",
			fr: "Griffe",
			de: "Kratzer",
			it: "Graffio",
			pt: "Arranhão",
			es: "Arañazo",
			'es-mx': "Arañazo"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card