import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Elgyem",
		'fr-fr': "Lewsor",
		'es-es': "Elgyem",
		'it-it': "Elgyem",
		'pt-br': "Elgyem",
		'de-de': "Pygraulon"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		605,
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
				"Psychic",
			],
			name: {
				'en-us': "Psyshot",
				'fr-fr': "Piqûre Psy",
			},

			damage: 30,

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
		'en-us': "Rumors of its origin are linked to a UFO crash site in the desert 50 years ago.",
	},

	thirdParty: {
		cardmarket: 280808,
		tcgplayer: 85179
	}
}

export default card
