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

	illustrator: "Nurikabe",
	rarity: "Illustration rare",
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
			type: "holo",
			thirdParty: {
				cardmarket: 851211,
				tcgplayer: 654479
			}
		},
	],
}

export default card
