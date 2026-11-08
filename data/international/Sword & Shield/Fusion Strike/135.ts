import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [74],
	set: Set,

	name: {
		'en-us': "Geodude",
		'fr-fr': "Racaillou",
		'es-es': "Geodude",
		'it-it': "Geodude",
		'pt-br': "Geodude",
		'de-de': "Kleinstein"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "E",
	illustrator: "OKACHEKE",

	description: {
		'en-us': "It uses both hands to climb precipitous cliffs. People who see it in action have been known to take up bouldering."
	},

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Rollout",
			'fr-fr': "Roulade",
			'de-de': "Walzer",
			'es-es': "Rodar",
			'pt-br': "Rolagem",
			'it-it': "Rotolamento"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Light Punch",
			'fr-fr': "Poing Léger",
			'de-de': "Leichter Hieb",
			'es-es': "Puño Ligero",
			'pt-br': "Soco de Luz",
			'it-it': "Pugnetto"
		},

		damage: 20
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582714,
				tcgplayer: 253339
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582714,
				tcgplayer: 253339
			}
		},
	],
}

export default card
