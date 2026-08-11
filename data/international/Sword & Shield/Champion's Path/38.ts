import { Card } from 'models/database/card'
import Set from '../Champion\'s Path'

const card: Card = {
	dexId: [359],

	name: {
		'en-us': "Absol",
		'fr-fr': "Absol",
		'es-es': "Absol",
		'it-it': "Absol",
		'pt-br': "Absol",
		'de-de': "Absol"
	},

	illustrator: "kodama",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 100,

	types: [
		"Darkness",
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				'en-us': "Dark Cutter",
				'fr-fr': "Tranch'Obscur",
				'es-es': "Cuchilla Oscura",
				'it-it': "Oscurotaglio",
				'pt-br': "Cortador de Escuridão",
				'de-de': "Dunkler Zerschneider"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		'en-us': "The elderly call it the disaster Pokémon and detest it, but interest in its power to predict disasters is on the rise."
	},

	thirdParty: {
		cardmarket: 500045,
		tcgplayer: 223038
	}
}

export default card
