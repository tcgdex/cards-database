import { Card } from 'models/database/card'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Glameow",
		'fr-fr': "Chaglam",
		'de-de': "Charmian"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		431,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Charm",
				'fr-fr': "Charme",
				'de-de': "Charme"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done by attacks from the Defending Pokémon is reduced by 20 (before applying Weakness and Resistance).",
				'fr-fr': "Lors du prochain tour de votre adversaire, tous dégâts infligés par des attaques du Pokémon Défenseur sont réduits de 20 (avant application de la Faiblesse et de la Résistance).",
				'de-de': "Während des nächsten Zuges deines Gegners wird aller Schaden, der durch Angriffe des Verteidigenden Pokémon zugefügt wird, um 20 Schadenspunkte reduziert (bevor Schwäche und Resistenz verrechnet werden)."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Pose",
				'fr-fr': "Pose",
				'de-de': "Posieren"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
				'de-de': "Wirf 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It claws if displeased and purrs when affectionate. Its fickleness if very popular among some.",
		'fr-fr': "Il griffe quand il est en colère et ronronne quand il est heureux. Certains aiment ce côté lunatique."
	},

	variants: [
		{
			type: "holo",
		}
	],
}

export default card
