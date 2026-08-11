import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Snover",
		'fr-fr': "Blizzi",
		'de-de': "Shnebedeck",
		'it-it': "Snover",
		'es-es': "Snover",
		'pt-br': "Snover",
		'es-mx': "Snover"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Basic",
	dexId: [459],

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Beat",
			'fr-fr': "Bataille",
			'de-de': "Verprügler",
			'it-it': "Battuta",
			'es-es': "Toque",
			'pt-br': "Pulso",
			'es-mx': "Golpeteo"
		},

		damage: 10
	}, {
		cost: ["Water", "Water"],

		name: {
			'en-us': "Icy Snow",
			'fr-fr': "Verglas",
			'de-de': "Eisiger Schnee",
			'it-it': "Geloneve",
			'es-es': "Nieve Helada",
			'pt-br': "Neve Congelada",
			'es-mx': "Nieve Helada"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851106,
				tcgplayer: 654374
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851106,
				tcgplayer: 654374
			}
		},
	],
}

export default card
