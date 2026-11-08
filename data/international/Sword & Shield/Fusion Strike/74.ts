import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [692],
	set: Set,

	name: {
		'en-us': "Clauncher",
		'fr-fr': "Flingouste",
		'es-es': "Clauncher",
		'it-it': "Clauncher",
		'pt-br': "Clauncher",
		'de-de': "Scampisto"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "Pani Kobayashi",

	description: {
		'en-us': "It moves around by jetting water from its right pincer. It has a poor sense of balance, so it's terrible at swimming straight."
	},

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Water Gun",
			'fr-fr': "Pistolet à O",
			'de-de': "Aquaknarre",
			'es-es': "Pistola Agua",
			'pt-br': "Revólver d'Água",
			'it-it': "Pistolacqua"
		},

		damage: 10
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Vise Grip",
			'fr-fr': "Force Poigne",
			'de-de': "Klammer",
			'es-es': "Agarre",
			'pt-br': "Agarramento Compressor",
			'it-it': "Presa"
		},

		damage: 20
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582208,
				tcgplayer: 253224
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582208,
				tcgplayer: 253224
			}
		},
	],
}

export default card
