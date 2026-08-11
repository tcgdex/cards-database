import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Hakamo-o",
		'fr-fr': "Écaïd",
		'es-es': "Hakamo-o",
		'it-it': "Hakamo-o",
		'pt-br': "Hakamo-o",
		'de-de': "Mediras"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		783,
	],

	hp: 90,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Jangmo-o",
		'fr-fr': "Bébécaille",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Headbutt",
				'fr-fr': "Coup d’Boule",
				'es-es': "Golpe Cabeza",
				'it-it': "Bottintesta",
				'pt-br': "Cabeçada",
				'de-de': "Kopfnuss"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Claw",
				'fr-fr': "Dracogriffe",
				'es-es': "Garra Dragón",
				'it-it': "Dragartigli",
				'pt-br': "Garra de Dragão",
				'de-de': "Drachenklaue"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It leaps at its prey with a courageous shout. Its scaly punches tear its opponents to shreds.",
	},

	thirdParty: {
		cardmarket: 297553,
		tcgplayer: 131015
	}
}

export default card
