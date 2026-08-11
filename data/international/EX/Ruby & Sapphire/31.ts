import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Grovyle",
		'fr-fr': "Massko",
		'de-de': "Reptain"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [253],

	hp: 70,

	types: [
		"Grass"
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
				'fr-fr': "Haleine empoisonnée",
				'de-de': "Gifthauch"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Das Verteidigende Pokémon ist jetzt vergiftet."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Grass",
			],
			name: {
				'en-us': "Swift",
				'fr-fr': "Météores",
				'de-de': "Sternschauer"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				'fr-fr': "Les dégâts infligés par cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Body ou tout autre effet sur le Pokémon Défenseur.",
				'de-de': "Schwäche, Resistenz, Poké-Powers, Poké-Bodies und alle anderen Effekte auf dem Verteidigenden Pokémon haben keine Auswirkungen auf die Schadenspunkte dieses Angriffs."
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


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275679,
				tcgplayer: 85935
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275679,
				tcgplayer: 85935
			}
		},
	],

}

export default card
