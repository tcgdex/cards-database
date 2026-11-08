import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [86],

	name: {
		'en-us': "Seel",
		'fr-fr': "Otaria",
		'es-es': "Seel",
		'es-mx': "Seel",
		'de-de': "Jurob",
		'it-it': "Seel",
		'pt-br': "Seel"
	},

	illustrator: "Kanami Ogata",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Rain Splash",
			'fr-fr': "Pluie Éclaboussante",
			'es-es': "Golpe de Lluvia",
			'es-mx': "Salpicalluvia",
			'de-de': "Regenplatscher",
			'it-it': "Spruzzapioggia",
			'pt-br': "Chuva Borrifante"
		},

		damage: 10
	}, {
		cost: ["Water", "Water"],

		name: {
			'en-us': "Wave Splash",
			'fr-fr': "Grosse Vague",
			'es-es': "Chapoteo Ondulante",
			'es-mx': "Acuasalpicadura",
			'de-de': "Wellenplatscher",
			'it-it': "Schizzi d'Onda",
			'pt-br': "Onda Borrifante"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684372,
				cardmarket: 877430
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684372,
				cardmarket: 877430
			}
		}
	],

}

export default card
