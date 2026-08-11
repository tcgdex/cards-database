import { Card } from 'models/database/card'
import Set from '../Nintendo Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Grovyle",
		'fr-fr': "Massko"
	},
	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		253,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		'en-us': "Treecko",
		'fr-fr': "Arcko"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Poison Breath",
				'fr-fr': "Haleine empoisonnée"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Swift",
				'fr-fr': "Météores"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				'fr-fr': "Les dégâts infligés par cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Body ou tout autre effet sur le Pokémon Défenseur."
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
			type: "Water",
			value: "-30"
		},
	],

	variants: [
		{
			type: 'normal',
			size: 'standard',
			stamp: ['winner'],
			thirdParty: {
				tcgplayer: 85934
			}
		},
		{
			type: 'normal',
			size: 'jumbo',
			stamp: ['winner']
		}
	]
}

export default card
