import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [599],
	set: Set,

	name: {
		'en-us': "Klink",
		'fr-fr': "Tic",
		'es-es': "Klink",
		'it-it': "Klink",
		'pt-br': "Klink",
		'de-de': "Klikk"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],
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
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Beam",
			'fr-fr': "Rayon",
			'es-es': "Transmisión",
			'it-it': "Raggio",
			'pt-br': "Feixe",
			'de-de': "Strahl"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785953,
				tcgplayer: 567325
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785953,
				tcgplayer: 567325
			}
		},
	],

	illustrator: "osare",

}

export default card
