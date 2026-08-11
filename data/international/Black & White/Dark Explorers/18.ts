import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Torkoal",
		'fr-fr': "Chartor",
		'es-es': "Torkoal",
		'it-it': "Torkoal",
		'pt-br': "Torkoal",
		'de-de': "Qurtel"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		324,
	],

	hp: 90,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Flame Cloak",
				'fr-fr': "Manteau de Feu"
			},
			effect: {
				'en-us': "Flip a coin. If heads, attach a Fire Energy card from your discard pile to this Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, attachez une carte Énergie  de votre pile de défausse à ce Pokémon."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heat Blast",
				'fr-fr': "Explosion de Chaleur"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It burns coal inside its shell for energy. It blows out black soot if it is endangered.",
	},

	thirdParty: {
		cardmarket: 280346,
		tcgplayer: 89973
	}
}

export default card
