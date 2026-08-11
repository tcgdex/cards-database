import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Scyther",
		'fr-fr': "Insécateur",
		'de-de': "Sichlor"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [123],

	hp: 70,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Swords Dance",
				'fr-fr': "Danse-lames",
				'de-de': "Swords Dance"
			},
			effect: {
				'en-us': "During your next turn, Scyther's Slash attack's base damage is 60.",
				'fr-fr': "Lors de votre prochain tour, les dégâts de base de l'attaque Tranche d'Insécateur sont de 60.",
				'de-de': "During your next turn, Scyther's Slash attack's base damage is 60."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'de-de': "Slash"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		'en-us': "It tears and shreds prey with its wickedly sharp scythes. It very rarely spreads its wings to fly."
	},

	variants: [
		{
			type:"holo",
			thirdParty: {
				tcgplayer: 89002,
				cardmarket: 278551
			}
		}
	],
	retreat: 0
}

export default card
