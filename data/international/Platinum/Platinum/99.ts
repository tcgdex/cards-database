import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Torchic",
		'fr-fr': "Poussifeu",
		'de-de': "Flemmli"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [255],

	hp: 60,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Focus Energy",
				'fr-fr': "Puissance",
				'de-de': "Focus Energy"
			},
			effect: {
				'en-us': "During your next turn, Torchic's Fire Shard attack's base damage is 80.",
				'fr-fr': "Lors de votre prochain tour, les dégâts de base de l'attaque Écharde de feu de Poussifeu sont de 80.",
				'de-de': "During your next turn, Torchic's Fire Shard attack's base damage is 80."
			},

		},
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Fire Shard",
				'fr-fr': "Écharde de feu",
				'de-de': "Fire Shard"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
				'de-de': "Flip a coin. If tails, this attack does nothing."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "A fire burns inside, so it feels very warm to hug. It launches fireballs of 1,800 degrees F."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 89961,
				cardmarket: 278520
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278520,
				tcgplayer: 89961
			}
		}
	],

}

export default card
