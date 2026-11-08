import { Card } from "models/database/card"
import Set from "../Silver Tempest"

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

	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Corkscrew Punch",
			'fr-fr': "Poing Tire-Bouchon",
			'es-es': "Puño Tirabuzón",
			'it-it': "Pugno Rotante",
			'pt-br': "Soco Saca-rolha",
			'de-de': "Korkenzieherhieb"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "It makes frightening noises with its poison-filled cheek sacs. When opponents flinch, Croagunk hits them with a poison jab.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682156,
				tcgplayer: 451763
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682156,
				tcgplayer: 451763
			}
		},
	],
}

export default card
