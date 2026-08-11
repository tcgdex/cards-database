import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Wailmer",
		'fr-fr': "Wailmer",
		'es-es': "Wailmer",
		'es-mx': "Wailmer",
		'de-de': "Wailmer",
		'it-it': "Wailmer",
		'pt-br': "Wailmer"
	},

	illustrator: "Asako Ito",
	rarity: "Common",
	category: "Pokemon",
	dexId: [320],
	hp: 130,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Water Gun",
			'fr-fr': "Pistolet à O",
			'es-es': "Pistola Agua",
			'es-mx': "Chorro de Agua",
			'de-de': "Aquaknarre",
			'it-it': "Pistolacqua",
			'pt-br': "Revólver d'Água"
		},

		cost: ["Water", "Water"],

		damage: 40
	}, {
		name: {
			'en-us': "Wave Splash",
			'fr-fr': "Grosse Vague",
			'es-es': "Chapoteo Ondulante",
			'es-mx': "Acuasalpicadura",
			'de-de': "Wellenplatscher",
			'it-it': "Schizzi d'Onda",
			'pt-br': "Onda Borrifante"
		},

		cost: ["Water", "Water", "Water"],

		damage: 80
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895803,
				tcgplayer: 704772
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895803,
				tcgplayer: 704772
			}
		},
	],
}

export default card
