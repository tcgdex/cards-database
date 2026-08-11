import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Wooper",
		'fr-fr': "Axoloto",
		'es-es': "Wooper",
		'it-it': "Wooper",
		'pt-br': "Wooper",
		'de-de': "Felino"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		194,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Mud Bomb",
				'fr-fr': "Boue-Bombe",
				'es-es': "Bomba Fango",
				'it-it': "Pantanobomba",
				'pt-br': "Bomba de Lama",
				'de-de': "Schlammbombe"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "This Pokémon lives in cold water. It will leave the water to search for food when it gets cold outside.",
	},

	thirdParty: {
		cardmarket: 372387,
		tcgplayer: 189195
	}
}

export default card
