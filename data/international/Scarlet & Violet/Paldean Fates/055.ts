import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [92],
	set: Set,

	name: {
		'en-us': "Gastly",
		'fr-fr': "Fantominus",
		'es-es': "Gastly",
		'it-it': "Gastly",
		'pt-br': "Gastly",
		'de-de': "Nebulak"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Allure",
			'fr-fr': "Allure",
			'es-es': "Atractivo",
			'it-it': "Affascinante",
			'pt-br': "Fascinar",
			'de-de': "Verlockung"
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
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Will-O-Wisp",
			'fr-fr': "Feu Follet",
			'es-es': "Fuego Fatuo",
			'it-it': "Fuocofatuo",
			'pt-br': "Fogo Fátuo",
			'de-de': "Irrlicht"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 751592,
				tcgplayer: 534417,
				cardtrader: 274239
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751592,
				tcgplayer: 534417,
				cardtrader: 274239
			}
		},
	],

	illustrator: "Nobuhiro Imagawa",

	description: {
		'en-us': "It wraps its opponent in its gas-like body, slowly weakening its prey by poisoning it through the skin.",
	},

}

export default card
