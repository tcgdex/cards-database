import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [453],
	set: Set,

	name: {
		'en-us': "Croagunk",
		'fr-fr': "Cradopaud",
		'es-es': "Croagunk",
		'it-it': "Croagunk",
		'pt-br': "Croagunk",
		'de-de': "Glibunkel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Nagomi Nijo",

	description: {
		'en-us': "Once diluted, its poison becomes medicinal. This Pokémon came into popularity after a pharmaceutical company chose it as a mascot."
	},

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Corkscrew Punch",
			'fr-fr': "Poing Tire-Bouchon",
			'de-de': "Korkenzieherhieb",
			'es-es': "Puño Tirabuzón",
			'pt-br': "Soco Saca-rolha",
			'it-it': "Pugno Rotante"
		},

		damage: 20
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582793,
				tcgplayer: 253379
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582793,
				tcgplayer: 253379
			}
		},
	],
}

export default card
