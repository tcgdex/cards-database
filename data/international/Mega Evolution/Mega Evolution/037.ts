import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Clauncher",
		'fr-fr': "Flingouste",
		'de-de': "Scampisto",
		'it-it': "Clauncher",
		'es-es': "Clauncher",
		'pt-br': "Clauncher",
		'es-mx': "Clauncher"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",
	dexId: [692],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			'en-us': "Wave Splash",
			'fr-fr': "Grosse Vague",
			'de-de': "Wellenplatscher",
			'it-it': "Schizzi d'Onda",
			'es-es': "Chapoteo Ondulante",
			'pt-br': "Onda Borrifante",
			'es-mx': "Acuasalpicadura"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851108,
				tcgplayer: 654376
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851108,
				tcgplayer: 654376
			}
		},
	],
}

export default card
