import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Gligar",
		'fr-fr': "Scorplane",
		'de-de': "Skorgla"
	},

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [207],

	hp: 70,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Stun Poison",
				'fr-fr': "Poison neural",
				'de-de': "Nervengift"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed and Poisoned.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Paralysé et Empoisonné.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt und vergiftet."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It flies straight at its target’s face then clamps down on the startled victim to inject poison."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279302,
				tcgplayer: 85768
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279302,
				tcgplayer: 85768
			}
		}
	],

}

export default card
