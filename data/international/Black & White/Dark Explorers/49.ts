import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Slowking",
		'fr-fr': "Roigada",
		'es-es': "Slowking",
		'it-it': "Slowking",
		'pt-br': "Slowking",
		'de-de': "Laschoking"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		199,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Slowpoke",
		'fr-fr': "Ramoloss"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Psy Bolt",
				'fr-fr': "Choc Mental"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé."
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hand Press",
				'fr-fr': "Pression des Mains"
			},
			effect: {
				'en-us': "If you have more cards in your hand than your opponent, this attack does 30 more damage.",
				'fr-fr': "Si vous avez plus de cartes dans votre main que votre adversaire, cette attaque inflige 30 dégâts supplémentaires."
			},
			damage: 50,

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
		'en-us': "Being bitten by Shellder gave it intelligence comparable to that of award-winning scientists.",
	},

	thirdParty: {
		cardmarket: 280377,
		tcgplayer: 89320
	}
}

export default card
