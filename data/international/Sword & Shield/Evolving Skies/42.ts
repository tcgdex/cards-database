import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Tympole",
		'fr-fr': "Tritonde",
		'es-es': "Tympole",
		'it-it': "Tympole",
		'pt-br': "Tympole",
		'de-de': "Schallquap"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",
	illustrator: "Mina Nakai",

	attacks: [{
		name: {
			'en-us': "Mud-Slap",
			'fr-fr': "Coud'Boue",
			'es-es': "Bofetón Lodo",
			'it-it': "Fangosberla",
			'pt-br': "Mud-Slap",
			'de-de': "Lehmschelle"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,

	description: {
		'en-us': "It uses sound waves to communicate with others of its kind. People and other Pokémon species can't hear its cries of warning."
	},

	dexId: [535],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574066,
				tcgplayer: 246858
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574066,
				tcgplayer: 246858
			}
		},
	],
}

export default card
