import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [860],
	set: Set,

	name: {
		'en-us': "Marnie's Morgrem",
		'fr-fr': "Fourbelin de Rosemary",
		'de-de': "Marys Pelzebub",
		'it-it': "Morgrem di Mary",
		'es-es': "Morgrem de Roxy",
		'pt-br': "Morgrem da Marine",
		'es-mx': "Morgrem de Marnie"
	},


	illustrator: "NC Empire",

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Marnie's Impidimp",
		'fr-fr': "Grimalin de Rosemary",
		'de-de': "Marys Bähmon",
		'it-it': "Impidimp di Mary",
		'es-es': "Impidimp de Roxy",
		'pt-br': "Impidimp da Marine",
		'es-mx': "Impidimp de Marnie"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			'en-us': "Corkscrew Punch",
			'fr-fr': "Poing Tire-Bouchon",
			'de-de': "Korkenzieherhieb",
			'it-it': "Pugno Rotante",
			'es-es': "Puño Tirabuzón",
			'pt-br': "Soco Saca-rolha",
			'es-mx': "Puño Sacacorchos"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 826009,
				tcgplayer: 632943
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 826009,
				tcgplayer: 632943
			}
		},
	],
}

export default card
