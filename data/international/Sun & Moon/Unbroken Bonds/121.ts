import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Alolan Diglett",
		'fr-fr': "Taupiqueur d’Alola",
		'es-es': "Diglett de Alola",
		'it-it': "Diglett di Alola",
		'pt-br': "Diglett de Alola",
		'de-de': "Alola-Digda"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		50,
	],

	hp: 50,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'es-es': "Apisonar",
				'it-it': "Carica",
				'pt-br': "Aríete",
				'de-de': "Ramme"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Although it's powerful enough to dig right through volcanic rock, it doesn't allow itself to be seen very often.",
	},

	thirdParty: {
		cardmarket: 372410,
		tcgplayer: 189220
	}
}

export default card
