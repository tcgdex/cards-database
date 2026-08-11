import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Krookodile",
		'fr-fr': "Crocorible",
		'es-es': "Krookodile",
		'it-it': "Krookodile",
		'pt-br': "Krookodile",
		'de-de': "Rabigator"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		553,
	],

	hp: 140,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Krokorok",
		'fr-fr': "Escroco",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Torment",
				'fr-fr': "Tourmente",
			},
			effect: {
				'en-us': "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
				'fr-fr': "Choisissez 1 des attaques du Pokémon Défenseur. Le Pokémon Défenseur ne pourra pas l'utiliser lors du prochain tour de votre adversaire.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Krookoroll",
				'fr-fr': "Crocoroulade",
			},
			effect: {
				'en-us': "If the Defending Pokémon already has any damage counters on it, this attack does 40 more damage.",
				'fr-fr': "Si le Pokémon Défenseur a déjà des marqueurs de dégâts, cette attaque inflige 40 dégâts supplémentaires.",
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

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It can expand the focus of its eyes, enabling it to see objects in the far distance as if it were using binoculars.",
	},

	thirdParty: {
		cardmarket: 279803,
		tcgplayer: 86541
	}
}

export default card
