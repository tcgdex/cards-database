import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2023'

const card: Card = {
	name: {
		'en-us': "Quaxly",
		'fr-fr': "Coiffeton",
		'es-es': "Quaxly",
		'it-it': "Quaxly",
		'pt-br': "Quaxly",
		'de-de': "Kwaks"
	},

	illustrator: "Mizue",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [912],

	hp: 70,

	types: ["Water"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'en-us': "Pound",
				'fr-fr': "Écras'Face",
				'es-es': "Destructor",
				'it-it': "Botta",
				'pt-br': "Pancada",
				'de-de': "Klaps"
			},
			damage: 10,
		},
		{
			cost: ["Water", "Colorless"],
			name: {
				'en-us': "Kick",
			},
			damage: 20,
		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 725420,
				tcgplayer: 516514
			}
		}
	]
}

export default card

