import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Alolan Rattata",
		'fr-fr': "Rattata d’Alola",
		'es-es': "Rattata de Alola",
		'it-it': "Rattata di Alola",
		'pt-br': "Rattata de Alola",
		'de-de': "Alola-Rattfratz"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		19,
	],

	hp: 40,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Gnaw",
				'fr-fr': "Ronge",
				'es-es': "Roer",
				'it-it': "Rosicchiamento",
				'pt-br': "Roída",
				'de-de': "Nagen"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "When the sun goes down, it becomes active. It runs around town on a chase for good food for the boss of its nest—Raticate.",
	},

	thirdParty: {
		cardmarket: 295387,
		tcgplayer: 126948
	}
}

export default card
