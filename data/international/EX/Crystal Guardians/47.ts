import { Card } from 'models/database/card'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		'en-us': "Cacnea",
		'fr-fr': "Cacnea",
		'de-de': "Tuska"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		331,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Call for Family",
				'fr-fr': "Appel à la famille",
				'de-de': "Familienruf"
			},
			effect: {
				'en-us': "Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck un Pokémon de base et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach1 Basis-Pokémon-Karte und lege sie auf deine Bank. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rising Lunge",
				'fr-fr': "Botte secrète",
				'de-de': "Aufwärtsstoß"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277128,
		tcgplayer: 84073
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
