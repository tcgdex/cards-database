import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [838],
	set: Set,

	name: {
		'fr-fr': "Wagomine",
		'en-us': "Carkol",
		'es-es': "Carkol",
		'it-it': "Carkol",
		'pt-br': "Carkol",
		'de-de': "Wagong"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		'fr-fr': "Charbi",
		'en-us': "Rolycoly"
	},

	attacks: [{
		name: {
			'fr-fr': "Collision",
			'en-us': "Ram",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'pt-br': "Aríete",
			'de-de': "Ramme"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'fr-fr': "Tacle Feu",
			'en-us': "Heat Crash",
			'es-es': "Golpe Calor",
			'it-it': "Marchiafuoco",
			'pt-br': "Choque de Calor",
			'de-de': "Brandstempel"
		},

		damage: 60,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		'en-us': "It forms coal inside its body. Coal dropped by this Pokémon once helped fuel the lives of people in the Galar region."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539728,
				tcgplayer: 232439
			}
		},
	],
}

export default card
