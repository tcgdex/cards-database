import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [120],

	name: {
		'en-us': "Staryu",
		'fr-fr': "Stari",
		'es-es': "Staryu",
		'es-mx': "Staryu",
		'de-de': "Sterndu",
		'it-it': "Staryu",
		'pt-br': "Staryu"
	},

	illustrator: "Takeshi Nakamura",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Water Gun",
			'fr-fr': "Pistolet à O",
			'es-es': "Pistola Agua",
			'es-mx': "Chorro de Agua",
			'de-de': "Aquaknarre",
			'it-it': "Pistolacqua",
			'pt-br': "Revólver d'Água"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684374,
				cardmarket: 877432
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684374,
				cardmarket: 877432
			}
		}
	],

}

export default card
