import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Vespiquen",
		'fr-fr': "Apireine",
		'es-es': "Vespiquen",
		'it-it': "Vespiquen",
		'pt-br': "Vespiquen",
		'de-de': "Honweisel"
	},

	illustrator: "chibi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		416,
	],

	hp: 120,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Combee",
		'fr-fr': "Apitrini",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Commanding Queen",
				'fr-fr': "Reine Imposante",
				'es-es': "Reina al Mando",
				'it-it': "Regina Condottiera",
				'pt-br': "Rainha Comandante",
				'de-de': "Herrschende Königin"
			},
			effect: {
				'en-us': "If you have 4 or fewer Grass Pokémon on your Bench, this attack does nothing.",
				'fr-fr': "Si vous avez 4 Pokémon Grass ou moins sur votre Banc, cette attaque ne fait rien.",
				'es-es': "Si tienes 4 o menos Pokémon Grass en tu Banca, este ataque no hace nada.",
				'it-it': "Se hai quattro o meno Pokémon Grass in panchina, questo attacco non ha effetto.",
				'pt-br': "Se você tiver 4 ou menos Pokémon Grass no seu Banco, este ataque não fará nada.",
				'de-de': "Wenn du 4 oder weniger Grass-Pokémon auf deiner Bank hast, hat diese Attacke keine Auswirkungen."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Its abdomen is a honeycomb for grubs. It raises its grubs on honey collected by Combee.",
	},

	thirdParty: {
		cardmarket: 365672,
		tcgplayer: 178833
	}
}

export default card
