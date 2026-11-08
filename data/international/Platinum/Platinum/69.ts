import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Chansey",
		'fr-fr': "Leveinard",
		'de-de': "Chaneira"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [113],

	hp: 90,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Healing Trial",
				'fr-fr': "Défi guérison",
				'de-de': "Healing Trial"
			},
			effect: {
				'en-us': "Flip a coin. If heads, remove 3 damage counters from Chansey. If tails, remove 3 damage counters from the Defending Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, retirez à Leveinard 3 marqueurs de dégât. Si c'est pile, retirez au Pokémon Défenseur 3 marqueurs de dégât.",
				'de-de': "Flip a coin. If heads, remove 3 damage counters from Chansey. If tails, remove 3 damage counters from the Defending Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Pulled Punch",
				'fr-fr': "Poing-doux",
				'de-de': "Pulled Punch"
			},
			effect: {
				'en-us': "If the Defending Pokémon already has any damage counters on it, this attack's base damage is 10 instead of 40.",
				'fr-fr': "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, les dégâts de base de cette attaque sont de 10 au lieu de 40.",
				'de-de': "If the Defending Pokémon already has any damage counters on it, this attack's base damage is 10 instead of 40."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "A kindly Pokémon that lays highly nutritious eggs and shares them with injured Pokémon or people."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 84176,
				cardmarket: 278490
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278490,
				tcgplayer: 84176
			}
		}
	],

}

export default card
