import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [616],
	set: Set,

	name: {
		'en-us': "Shelmet",
		'fr-fr': "Escargaume",
		'es-es': "Shelmet",
		'it-it': "Shelmet",
		'pt-br': "Shelmet",
		'de-de': "Schnuthelm"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "E",
	illustrator: "Shibuzoh.",

	description: {
		'en-us': "It has a strange physiology that responds to electricity. When together with Karrablast, Shelmet evolves for some reason."
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Spit Beam",
			'fr-fr': "Rayon Cracheur",
			'de-de': "Spuckstrahl",
			'es-es': "Rayo Escupitajo",
			'pt-br': "Raio de Cuspe",
			'it-it': "Raggiosputo"
		},

		damage: 20
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582050,
				tcgplayer: 253087
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582050,
				tcgplayer: 253087
			}
		},
	],
}

export default card
