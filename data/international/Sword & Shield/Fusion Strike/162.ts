import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [318],
	set: Set,

	name: {
		'en-us': "Carvanha",
		'fr-fr': "Carvanha",
		'es-es': "Carvanha",
		'it-it': "Carvanha",
		'pt-br': "Carvanha",
		'de-de': "Kanivanha"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "NC Empire",

	description: {
		'en-us': "With its sturdy jaws and fangs, it can easily chomp wooden boats to splinters. It fights with Basculin over food."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'de-de': "Biss",
			'es-es': "Mordisco",
			'pt-br': "Mordida",
			'it-it': "Morso"
		},

		damage: 10
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582790,
				tcgplayer: 253376
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582790,
				tcgplayer: 253376
			}
		},
	],
}

export default card
