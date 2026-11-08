import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Gligar",
		'fr-fr': "Scorplane",
		'de-de': "Skorgla"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		207,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Light Poison",
				'fr-fr': "Poison léger",
				'de-de': "Schwaches Gift"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing. If heads, the Defending Pokémon is now Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque est sans effet. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Wirf 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt vergiftet."
			},
			damage: 10,

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Jump On",
				'fr-fr': "Sauter",
				'de-de': "Draufspringen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It sails on the winds with its limbs extended to strike from the sky. It aims for the prey's face.",
		'fr-fr': "Il chevauche les vents en tendant ses membres pour frapper depuis le ciel. Il vise toujours au visage."
	},

	thirdParty: {
		cardmarket: 278243,
		tcgplayer: 85766
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
