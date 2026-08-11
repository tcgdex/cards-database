import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [921],
	set: Set,

	name: {
		'fr-fr': "Pohm",
		'en-us': "Pawmi",
		'es-es': "Pawmi",
		'it-it': "Pawmi",
		'pt-br': "Pawmi",
		'de-de': "Pamo"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'fr-fr': "Choc Statique",
			'en-us': "Static Shock",
			'es-es': "Impacto Estático",
			'it-it': "Shock Statico",
			'pt-br': "Choque de Estática",
			'de-de': "Statischer Schock"
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
				cardmarket: 715549,
				tcgplayer: 497485,
				cardtrader: 248701
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715549,
				tcgplayer: 497485,
				cardtrader: 248701
			}
		},
	],

	illustrator: "sowsow",

	description: {
		'en-us': "It has underdeveloped electric sacs on its cheeks. These sacs can produce electricity only if Pawmi rubs them furiously with the pads on its forepaws.",
	},
}

export default card
