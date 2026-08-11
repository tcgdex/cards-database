import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Burmy",
		'fr-fr': "Cheniti",
		'es-es': "Burmy",
		'it-it': "Burmy",
		'pt-br': "Burmy",
		'de-de': "Burmy"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		412,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Hang Down",
				'fr-fr': "Suspension",
				'es-es': "Prender",
				'it-it': "Tirar Giù",
				'pt-br': "Dependurar",
				'de-de': "Herunterhängen"
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

	retreat: 1,

	description: {
		'en-us': "If its cloak is broken in battle, it quickly remakes the cloak with materials nearby.",
	},

	thirdParty: {
		cardmarket: 289828,
		tcgplayer: 117765
	}
}

export default card
