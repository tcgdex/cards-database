import { Card } from 'models/database/card'
import Set from '../Dragon Vault'

const card: Card = {
	name: {
		'en-us': "Axew",
		'fr-fr': "Coupenotte",
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		610,
	],

	hp: 50,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Metal",
			],
			name: {
				'en-us': "Lunge",
				'fr-fr': "Coup Rapide",
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They mark their territory by leaving gashes in trees with their tusks. If a tusk breaks, a new one grows in quickly.",
	},

	thirdParty: {
		cardmarket: 281012,
		tcgplayer: 83671
	}
}

export default card
