import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Cottonee",
		'fr-fr': "Doudouvet",
		'de-de': "Waumboll",
		'it-it': "Cottonee",
		'es-es': "Cottonee",
		'pt-br': "Cottonee"
	},

	illustrator: "Kariya",
	rarity: "Promo",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",
	dexId: [546],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Collect",
			'fr-fr': "Collecte",
			'de-de': "Sammeln",
			'it-it': "Tassa",
			'es-es': "Coleccionar",
			'pt-br': "Coleta"
		},

		effect: {
			'en-us': "Draw a card.",
			'fr-fr': "Piochez une carte.",
			'de-de': "Ziehe 1 Karte.",
			'it-it': "Pesca una carta.",
			'es-es': "Roba 1 carta.",
			'pt-br': "Compre uma carta."
		}
	}],

	retreat: 1,
	regulationMark: "I",

	weaknesses: [{
		type: "Metal",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 859021,
				tcgplayer: 664051
			}
		},
	],
}

export default card
