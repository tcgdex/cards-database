import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [56],
	set: Set,

	name: {
		'en-us': "Mankey",
		'fr-fr': "Férosinge",
		'es-es': "Mankey",
		'it-it': "Mankey",
		'pt-br': "Mankey",
		'de-de': "Menki"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "sowsow",

	description: {
		'en-us': "If one gets angry, all the others around it will get angry, so silence is a rare visitor in a troop of Mankey."
	},

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Scratch",
			'fr-fr': "Griffe",
			'de-de': "Kratzer",
			'es-es': "Arañazo",
			'pt-br': "Arranhão",
			'it-it': "Graffio"
		},

		damage: 10
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582711,
				tcgplayer: 253334
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582711,
				tcgplayer: 253334
			}
		},
	],
}

export default card
