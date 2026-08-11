import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [159],
	set: Set,

	name: {
		'en-us': "Croconaw",
		'fr-fr': "Crocrodil",
		'es-es': "Croconaw",
		'it-it': "Croconaw",
		'pt-br': "Croconaw",
		'de-de': "Tyracroc"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Totodile",
		'fr-fr': "Kaiminus",
		'es-es': "Totodile",
		'it-it': "Totodile",
		'pt-br': "Totodile",
		'de-de': "Karnimani"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "Tomokazu Komiya",

	description: {
		'en-us': "Once it bites down, it won't let go until it loses its fangs. New fangs quickly grow into place."
	},

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Wave Splash",
			'fr-fr': "Grosse Vague",
			'de-de': "Wellenplatscher",
			'es-es': "Chapoteo Ondulante",
			'pt-br': "Onda Borrifante",
			'it-it': "Schizzi d'Onda"
		},

		damage: 30
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Surf",
			'fr-fr': "Surf",
			'de-de': "Surfer",
			'es-es': "Surf",
			'pt-br': "Surfar",
			'it-it': "Surf"
		},

		damage: 60
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582190,
				tcgplayer: 253187
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582190,
				tcgplayer: 253187
			}
		},
	],
}

export default card
