import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [953],
	set: Set,

	name: {
		'en-us': "Rellor",
		'fr-fr': "Léboulérou",
		'de-de': "Relluk",
		'it-it': "Rellor",
		'es-es': "Rellor",
		'pt-br': "Rellor",
		'es-mx': "Rellor"
	},

	illustrator: "Toshinao Aoki",
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
			'de-de': "Sammeln",
			'it-it': "Tassa",
			'es-es': "Coleccionar",
			'pt-br': "Coleta",
			'es-mx': "Recolectar"
		},

		effect: {
			'en-us': "Draw a card.",
			'fr-fr': "Piochez une carte.",
			'de-de': "Ziehe 1 Karte.",
			'it-it': "Pesca una carta.",
			'es-es': "Roba 1 carta.",
			'pt-br': "Compre uma carta.",
			'es-mx': "Roba 1 carta."
		}
	}, {
		cost: ["Grass"],

		name: {
			'en-us': "Rollout",
			'fr-fr': "Roulade",
			'de-de': "Walzer",
			'it-it': "Rotolamento",
			'es-es': "Rodar",
			'pt-br': "Rolagem",
			'es-mx': "Rodada"
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
				cardmarket: 825898,
				tcgplayer: 632847
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825898,
				tcgplayer: 632847
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 878005,
			}
		},
	],
}

export default card
