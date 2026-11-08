import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Garbodor",
		'fr-fr': "Miasmax",
		'es-es': "Garbodor",
		'it-it': "Garbodor",
		'pt-br': "Garbodor",
		'de-de': "Deponitox"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		569,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Trubbish",
		'fr-fr': "Miamiasme",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Biosmog",
				'fr-fr': "Brouillard Toxique",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned. Flip a coin. If heads, discard an Energy attached to that Pokémon.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné. Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Défenseur.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Sludge Bomb",
				'fr-fr': "Bomb-Beurk",
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

	retreat: 3,

	description: {
		'en-us': "Consuming garbage makes new kinds of poison gases and liquids inside their bodies.",
	},

	thirdParty: {
		cardmarket: 280806,
		tcgplayer: 85619
	}
}

export default card
