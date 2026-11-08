import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Kabuto",
		'fr-fr': "Kabuto",
		'es-es': "Kabuto",
		'it-it': "Kabuto",
		'pt-br': "Kabuto",
		'de-de': "Kabuto"
	},

	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		140,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	stage: "RESTORED",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Mud Shot",
				'fr-fr': "Tir de Boue",
				'es-es': "Disparo Lodo",
				'it-it': "Colpodifango",
				'pt-br': "Água Viscosa",
				'de-de': "Lehmschuss"
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

	evolveFrom: {
		'en-us': "Dome Fossil Kabuto",
		'fr-fr': "Fossile Dôme Kabuto",
		'es-es': "Fósil Domo Kabuto",
		'it-it': "Domofossile di Kabuto",
		'pt-br': "Fóssil Cúpula de Kabuto",
		'de-de': "Domfossil Kabuto"
	},

	description: {
		'en-us': "This Pokémon was regenerated from the fossil of an ancient creature. It protects itself with a hard shell.",
	},

	thirdParty: {
		cardmarket: 289864,
		tcgplayer: 117798
	}
}

export default card
