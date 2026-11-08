import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [859],
	set: Set,

	name: {
		'fr-fr': "Grimalin",
		'en-us': "Impidimp",
		'es-es': "Impidimp",
		'it-it': "Impidimp",
		'pt-br': "Impidimp",
		'de-de': "Bähmon"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	attacks: [{
		name: {
			'fr-fr': "Bataille",
			'en-us': "Beat",
			'es-es': "Toque",
			'it-it': "Battuta",
			'pt-br': "Pulso",
			'de-de': "Verprügler"
		},

		damage: 10,
		cost: ["Darkness"]
	}, {
		name: {
			'fr-fr': "Ruée",
			'en-us': "Stampede",
			'es-es': "Estampida",
			'it-it': "Fuggi Fuggi",
			'pt-br': "Estouro",
			'de-de': "Zertrampeln"
		},

		damage: 20,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Basic",

	description: {
		'en-us': "Through its nose, it sucks in the emanations produced by people and Pokémon when they feel annoyed. It thrives off this negative energy."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539803,
				tcgplayer: 232464
			}
		},
	],
}

export default card
