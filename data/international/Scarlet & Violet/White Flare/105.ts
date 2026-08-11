import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [501],
	set: Set,

	name: {
		'en-us': "Oshawott",
		'fr-fr': "Moustillon",
		'de-de': "Ottaro",
		'it-it': "Oshawott",
		'pt-br': "Oshawott",
		'es-es': "Oshawott",
		'es-mx': "Oshawott"
	},

	illustrator: "OKACHEKE",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'de-de': "Tackle",
			'it-it': "Azione",
			'pt-br': "Investida",
			'es-es': "Placaje",
			'es-mx': "Tacleada"
		},

		damage: 10
	}, {
		cost: ["Water", "Water"],

		name: {
			'en-us': "Water Gun",
			'fr-fr': "Pistolet à O",
			'de-de': "Aquaknarre",
			'it-it': "Pistolacqua",
			'pt-br': "Revólver d'Água",
			'es-es': "Pistola Agua",
			'es-mx': "Chorro de Agua"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836104,
				tcgplayer: 642217
			}
		},
	],
}

export default card
