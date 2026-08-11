import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Axew",
		'fr-fr': "Coupenotte",
		'es-es': "Axew",
		'it-it': "Axew",
		'pt-br': "Axew",
		'de-de': "Milza"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		610,
	],

	hp: 60,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Brat Snack",
				'fr-fr': "Goûter Galopin",
				'es-es': "Bocado Consentido",
				'it-it': "Spuntino Moccioso",
				'pt-br': "Lanche de Pirralho",
				'de-de': "Schlingelschmaus"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Metal",
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

			damage: 40,

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
		'en-us': "They mark their territory by leaving gashes in trees with their tusks. If a tusk breaks, a new one grows in quickly.",
	},

	thirdParty: {
		cardmarket: 286354,
		tcgplayer: 107227
	}
}

export default card
