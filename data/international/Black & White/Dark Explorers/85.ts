import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Chatot",
		'fr-fr': "Pijako",
		'es-es': "Chatot",
		'it-it': "Chatot",
		'pt-br': "Chatot",
		'de-de': "Plaudagei"
	},

	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		441,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tone-Deaf",
				'fr-fr': "Dur d'Oreille"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Peck",
				'fr-fr': "Picpic"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its tongue is just like a human's. As a result, it can cleverly mimic human speech.",
	},

	thirdParty: {
		cardmarket: 280413,
		tcgplayer: 84243
	}
}

export default card
