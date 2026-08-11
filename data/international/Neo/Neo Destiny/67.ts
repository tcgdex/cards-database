import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Gligar",
		'fr-fr': "Scorplane",
		'de-de': "Skorgla"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		207,
	],

	hp: 50,

	types: [
		"Fighting",
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
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé et Empoisonné.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt gelähmt und vergiftet."
			},

			damage: 10
		},
	],

	weaknesses: [
		{
			type: "Grass",
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
		'en-us': "It spends its days hanging from cliffs, swooping down on any prey it spots from its high vantage point.",
		'fr-fr': "Il passe ses journées accroché aux falaises, attendant de fondre sur sa proie depuis son poste d'observation."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274719,
				tcgplayer: 85762
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274719,
				tcgplayer: 85762
			}
		}
	]
}

export default card
