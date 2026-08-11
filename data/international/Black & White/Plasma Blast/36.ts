import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Uxie",
		'fr-fr': "Créhelf",
		'es-es': "Uxie",
		'it-it': "Uxie",
		'pt-br': "Uxie",
		'de-de': "Selfe"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		480,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Psypower",
				'fr-fr': "Puissance Psy",
			},
			effect: {
				'en-us': "Put 3 damage counters on your opponent's Pokémon in any way you like.",
				'fr-fr': "Placez 3 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When Uxie flew, people gained the ability to solve problems. It was the birth of knowledge.",
	},

	thirdParty: {
		cardmarket: 281057,
		tcgplayer: 90261
	}
}

export default card
