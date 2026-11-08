import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [953],
	set: Set,

	name: {
		'en-us': "Rellor",
		'fr-fr': "Léboulérou",
		'es-es': "Rellor",
		'it-it': "Rellor",
		'pt-br': "Rellor",
		'de-de': "Relluk"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Collect",
			'fr-fr': "Collecte",
			'es-es': "Coleccionar",
			'it-it': "Tassa",
			'pt-br': "Coleta",
			'de-de': "Sammeln"
		},

		effect: {
			'en-us': "Draw a card.",
			'fr-fr': "Piochez une carte.",
			'es-es': "Roba 1 carta.",
			'it-it': "Pesca una carta.",
			'pt-br': "Compre uma carta.",
			'de-de': "Ziehe 1 Karte."
		}
	}, {
		cost: ["Grass"],

		name: {
			'en-us': "Rollout",
			'fr-fr': "Roulade",
			'es-es': "Rodar",
			'it-it': "Rotolamento",
			'pt-br': "Rolagem",
			'de-de': "Walzer"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794268,
				tcgplayer: 590035
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794268,
				tcgplayer: 590035
			}
		},
	],

	illustrator: "Toshinao Aoki",
	
}

export default card
