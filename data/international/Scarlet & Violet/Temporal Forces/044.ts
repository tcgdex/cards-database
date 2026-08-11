import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [647],
	set: Set,

	name: {
		'en-us': "Keldeo",
		'fr-fr': "Keldeo",
		'es-es': "Keldeo",
		'it-it': "Keldeo",
		'pt-br': "Keldeo",
		'de-de': "Keldeo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Rapid Draw",
			'fr-fr': "Pioche Rapide",
			'es-es': "Robo Rápido",
			'it-it': "Pescalesto",
			'pt-br': "Retirada Rápida",
			'de-de': "Schnellzieher"
		},

		effect: {
			'en-us': "Draw 2 cards.",
			'fr-fr': "Piochez 2 cartes.",
			'es-es': "Roba 2 cartas.",
			'it-it': "Pesca due carte.",
			'pt-br': "Compre 2 cartas.",
			'de-de': "Ziehe 2 Karten."
		},

		damage: 20
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Aqua Blade",
			'fr-fr': "Hydrolame",
			'es-es': "Hoja Agua",
			'it-it': "Idrolama",
			'pt-br': "Lâmina de Água",
			'de-de': "Aquaklinge"
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "Keldeo has strengthened its resolve for battle, filling its body with power and changing its form.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760674,
				tcgplayer: 542788
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760674,
				tcgplayer: 542788
			}
		},
	],

	illustrator: "satoma",

}

export default card