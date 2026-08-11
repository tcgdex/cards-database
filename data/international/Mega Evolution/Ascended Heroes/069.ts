import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Iono's Tadbulb",
		'fr-fr': "Têtampoule de Mashynn",
		'es-es': "Tadbulb de e-Nigma",
		'es-mx': "Tadbulb de e-Nigma",
		'de-de': "Enigmaras Blipp",
		'it-it': "Tadbulb di Kissara",
		'pt-br': "Tadbulb da Kissera"
	},

	illustrator: "kurumitsu",
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
			'es-mx': "Minicarga",
			'de-de': "Mini-Stromstoß",
			'it-it': "Sottocarica Minuscola",
			'pt-br': "Carga Pequenina"
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

	description: {
		'en-us': "Tadbulb shakes its tail to generate electricity. If it senses danger, it will make its head blink on and off to alert its allies.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869680,
			tcgplayer: 675881
		}
	},
	{
		type: "reverse",
		foil: "pokeball",
		thirdParty: {
			cardmarket: 870246,
			tcgplayer: 676907
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870245,
			tcgplayer: 677047
		}
	},
],
}

export default card
