import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Surskit",
		'fr-fr': "Arakdo",
		'es-es': "Surskit",
		'it-it': "Surskit",
		'pt-br': "Surskit",
		'de-de': "Gehweiher"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		283,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Sweet Scent",
				'fr-fr': "Doux Parfum",
			},
			effect: {
				'en-us': "Heal 20 damage from 1 of your Pokémon.",
				'fr-fr': "Soignez 20 dégâts à 1 de vos Pokémon.",
			},

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
		'en-us': "It appears as if it is skating on water. It draws prey with a sweet scent from the tip of its head.",
	},

	thirdParty: {
		cardmarket: 281022,
		tcgplayer: 89652
	}
}

export default card
