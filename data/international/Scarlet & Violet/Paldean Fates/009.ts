import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [126],
	set: Set,

	name: {
		'en-us': "Magmar",
		'fr-fr': "Magmar",
		'es-es': "Magmar",
		'it-it': "Magmar",
		'pt-br': "Magmar",
		'de-de': "Magmar"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

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
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Steady Firebreathing",
			'fr-fr': "Crachage de Feu Régulier",
			'es-es': "Lanzallamas Continuo",
			'it-it': "Soffiofuoco Mirato",
			'pt-br': "Hálito de Fogo Constante",
			'de-de': "Stetiger Feuerhauch"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 751535,
				tcgplayer: 534149,
				cardtrader: 274193
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751535,
				tcgplayer: 534149,
				cardtrader: 274193
			}
		},
	],

	illustrator: "miki kudo",

	description: {
		'en-us': "These Pokémon's bodies are constantly burning. Magmar are feared as one of the causes behind fires.",
	},

}

export default card
