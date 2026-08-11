import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Cottonee",
		'fr-fr': "Doudouvet",
		'es-es': "Cottonee",
		'it-it': "Cottonee",
		'pt-br': "Cottonee",
		'de-de': "Waumboll"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		546,
	],

	hp: 50,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Fairy Wind",
				'fr-fr': "Vent Féérique",
				'es-es': "Viento Feérico",
				'it-it': "Vento di Fata",
				'pt-br': "Vento de Fada",
				'de-de': "Feenbrise"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Perhaps because they feel more at ease in a group, they stick to others they find. They end up looking like a cloud.",
	},

	thirdParty: {
		cardmarket: 289891,
		tcgplayer: 117845
	}
}

export default card
