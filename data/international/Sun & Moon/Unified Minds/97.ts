import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Toxapex",
		'fr-fr': "Prédastérie",
		'es-es': "Toxapex",
		'it-it': "Toxapex",
		'pt-br': "Toxapex",
		'de-de': "Aggrostella"
	},

	illustrator: "chibi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		748,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Mareanie",
		'fr-fr': "Vorastérie",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Spike Shot",
				'fr-fr': "Tir d’Épines",
				'es-es': "Disparo Púas",
				'it-it': "Sparaculeo",
				'pt-br': "Disparo de Espinhos",
				'de-de': "Dornensalve"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "To attack, this Pokémon sends toxic spikes flying at its enemies. Ones that come close get mown down by the claws on its feet.",
	},

	thirdParty: {
		cardmarket: 388292,
		tcgplayer: 195030
	}
}

export default card
