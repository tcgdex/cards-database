import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Dragalge",
		'fr-fr': "Kravarech",
	},

	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		691,
	],

	hp: 100,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Skrelp",
		'fr-fr': "Venalgue",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Poison Barrier",
				'fr-fr': "Barrière de Poison",
			},
			effect: {
				'en-us': "Your opponent's Poisoned Pokémon can't retreat.",
				'fr-fr': "Les Pokémon Empoisonnés de votre adversaire ne peuvent pas battre en retraite.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Poison Breath",
				'fr-fr': "Haleine Empoisonnée",
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Their poison is strong enough to eat through the hull of a tanker, and they spit it indiscriminately at anything that enters their territory.",
	},

	thirdParty: {
		cardmarket: 554158
	}
}

export default card
