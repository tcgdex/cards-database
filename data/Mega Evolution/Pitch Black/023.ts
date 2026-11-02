import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Electrike",
		fr: "Dynavolt",
		es: "Electrike",
		'es-mx': "Electrike",
		de: "Frizelbliz",
		it: "Electrike",
		pt: "Electrike"
	},

	illustrator: "Dsuke",
	rarity: "Common",
	category: "Pokemon",
	dexId: [309],
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Collect",
			fr: "Collecte",
			es: "Coleccionar",
			'es-mx': "Recolectar",
			de: "Sammeln",
			it: "Tassa",
			pt: "Coleta"
		},

		cost: ["Lightning"],

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
			es: "Roba 1 carta.",
			'es-mx': "Roba 1 carta.",
			de: "Ziehe 1 Karte.",
			it: "Pesca una carta.",
			pt: "Compre uma carta."
		}
	}, {
		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			'es-mx': "Tacleada",
			de: "Tackle",
			it: "Azione",
			pt: "Investida"
		},

		cost: ["Lightning", "Lightning"],

		damage: 30
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895811,
				tcgplayer: 704780
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895811,
				tcgplayer: 704780
			}
		},
	],
}

export default card
