import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Skorupi",
		'fr-fr': "Rapion",
		'de-de': "Pionskora"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [451],

	hp: 60,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Paralyzing Clamp",
				'fr-fr': "Griffe paralysante",
				'de-de': "Lähmschnapper"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c’est pile, cette attaque ne fait rien. Si c’est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf eine Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen. Bei \"Kopf\" ist das Verteidigenede Pokémon jetzt gelähmt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It burrows under the sand to lie in wait for prey. Its tail claws can inject its prey with a savage poison."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89276,
				cardmarket: 279606
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279606,
				tcgplayer: 89276
			}
		},
	],

}

export default card
