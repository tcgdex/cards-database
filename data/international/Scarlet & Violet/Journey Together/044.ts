import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [74],
	set: Set,

	name: {
		'en-us': "Alolan Geodude",
		'fr-fr': "Racaillou d'Alola",
		'es-es': "Geodude de Alola",
		'de-de': "Alola-Kleinstein",
		'it-it': "Geodude di Alola",
		'pt-br': "Geodude de Alola",
		'es-mx': "Geodude de Alola"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Knuckle Punch",
			'fr-fr': "Coud'Phalange",
			'es-es': "Puño con Nudillos",
			'de-de': "Knöchelhieb",
			'it-it': "Noccapugno",
			'pt-br': "Soco com Punho",
			'es-mx': "Puño con Nudillos"
		},

		damage: 10
	}, {
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
	regulationMark: "H",
	illustrator: "svlt",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817196,
				tcgplayer: 623471
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817196,
				tcgplayer: 623471
			}
		},
	],
}

export default card
