import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Breloom",
		'fr-fr': "Chapignon",
		'de-de': "Kapilz"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [286],

	hp: 70,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Shroomish",
		'fr-fr': "Balignon"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Headbutt",
				'fr-fr': "Coup d'boule",
				'de-de': "Headbutt"
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Battle Blast",
				'fr-fr': "Combat explosif",
				'de-de': "Battle Blast"
			},
			effect: {
				'en-us': "Does 40 damage plus 10 more damage for each Fighting Energy attached to Breloom.",
				'fr-fr': "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à Chapignon.",
				'de-de': "Does 40 damage plus 10 more damage for each  Energy card attached to Breloom."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275664,
				tcgplayer: 83953
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275664,
				tcgplayer: 83953
			}
		},
	],

}

export default card
