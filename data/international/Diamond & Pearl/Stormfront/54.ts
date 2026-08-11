import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Bidoof",
		'fr-fr': "Keunotor",
		'de-de': "Bidiza"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		399,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'fr-fr': "Keunotor",
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Yawn",
				'fr-fr': "Baillement",
				'de-de': "Gähnen"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Self-abandonment",
				'fr-fr': "S'abandonner",
				'de-de': "Selbstlosigkeit"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 damage to the Defending Pokémon. If tails, Bidoof does 10 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts au Pokémon Défenseur. Si c'est pile, Keunotor s'inflige 10 dégâts.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff dem Verteidigenden Pokémon 30 Schadenspunkte zu. Bei \"Zahl\" fügt Bidiza sich selbst 10 Schadenspunkte zu."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	retreat: 2,

	description: {
		'en-us': "With nerves of steel, nothing can perturb it. It is more agile and active than it appears.",
		'fr-fr': "Rien ne peut perturber ses nerfs d'acier. Il est plus agile et énergique qu'il y paraît."
	},

	thirdParty: {
		cardmarket: 278352,
		tcgplayer: 83827
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
