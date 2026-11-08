import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		'en-us': "It protects its skin by covering its body in delicate bubbles. Beneath its happy-go-lucky air, it keeps a watchful eye on its surroundings.",
	},


	name: {
		'en-us': "Froakie",
		'fr-fr': "Grenousse",
		'es-es': "Froakie",
		'es-mx': "Froakie",
		'de-de': "Froxy",
		'it-it': "Froakie",
		'pt-br': "Froakie"
	},

	illustrator: "Kariya",
	rarity: "Common",
	category: "Pokemon",
	dexId: [656],
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Collect",
			'fr-fr': "Collecte",
			'es-es': "Coleccionar",
			'es-mx': "Recolectar",
			'de-de': "Sammeln",
			'it-it': "Tassa",
			'pt-br': "Coleta"
		},

		cost: ["Colorless"],

		effect: {
			'en-us': "Draw a card.",
			'fr-fr': "Piochez une carte.",
			'es-es': "Roba 1 carta.",
			'es-mx': "Roba 1 carta.",
			'de-de': "Ziehe 1 Karte.",
			'it-it': "Pesca una carta.",
			'pt-br': "Compre uma carta."
		}
	}, {
		name: {
			'en-us': "Water Gun",
			'fr-fr': "Pistolet à O",
			'es-es': "Pistola Agua",
			'es-mx': "Chorro de Agua",
			'de-de': "Aquaknarre",
			'it-it': "Pistolacqua",
			'pt-br': "Revólver d'Água"
		},

		cost: ["Water"],
		damage: 10
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886412,
				tcgplayer: 693488
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886412,
				tcgplayer: 693488
			}
		},
	],
}

export default card
