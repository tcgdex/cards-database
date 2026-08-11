import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [751],
	set: Set,

	name: {
		'en-us': "Dewpider",
		'fr-fr': "Araqua",
		'es-es': "Dewpider",
		'it-it': "Dewpider",
		'pt-br': "Dewpider",
		'de-de': "Araqua"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Hook",
			'fr-fr': "Crochet",
			'es-es': "Garfio",
			'it-it': "Uncino",
			'pt-br': "Gancho",
			'de-de': "Haken"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "It forms a water bubble at the rear of its body and then covers its head with it. Meeting another Dewpider means comparing water-bubble sizes.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682094,
				tcgplayer: 451694
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682094,
				tcgplayer: 451694
			}
		},
	],
}

export default card
