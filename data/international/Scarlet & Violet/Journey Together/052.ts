import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [938],
	set: Set,

	name: {
		'en-us': "Iono's Tadbulb",
		'fr-fr': "Têtampoule de Mashynn",
		'es-es': "Tadbulb de e-Nigma",
		'de-de': "Enigmaras Blipp",
		'it-it': "Tadbulb di Kissara",
		'pt-br': "Tadbulb da Kissera",
		'es-mx': "Tadbulb de e-Nigma"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Tiny Charge",
			'fr-fr': "Décharge Mineure",
			'es-es': "Carga Diminuta",
			'de-de': "Mini-Stromstoß",
			'it-it': "Sottocarica Minuscola",
			'pt-br': "Carga Pequenina",
			'es-mx': "Minicarga"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",
	illustrator: "kurumitsu",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817204,
				tcgplayer: 623479
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817204,
				tcgplayer: 623479
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 819348,
			}
		},
	],
}

export default card
