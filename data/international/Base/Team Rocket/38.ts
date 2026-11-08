import { Card } from 'models/database/card'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		'en-us': "Dark Jolteon",
		'fr-fr': "Voltali obscur",
		'de-de': "Dunkles Blitza"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		135,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Lightning Flash",
				'fr-fr': "Flash éclair",
				'de-de': "Blitzaufleuchten"
			},
			effect: {
				'en-us': "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				'fr-fr': "Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, votre adversaire doit lancer une pièce. Si c'est pile, cette attaque ne fait rien.",
				'de-de': "Falls das verteidigende Pokémon während des nächsten Zuges deines Gegners anzugreifen versucht, wirft dein gegner eine Münze. Bei 'Zahl' richtet dieser Angriff nichts aus."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Thunder Attack",
				'fr-fr': "Attaque tonnerre",
				'de-de': "Donnerangriff"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, Dark Jolteon does 10 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé. Si c'est pile, Voltali obscur s'inflige 10 dégâts.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt gelähmt. Bei 'Zahl' fügt sich Dunkles Blitza selbst 10 Schadenspunkte zu."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "A dangerous Pokémon when angered. It likes to playfully shock people with the electricity it stores within its body.",
		'fr-fr': "Très dangereux quand il se met en colère, il aime s'amuser à électrocuter les gens avec l'électricité qu'il stocke dans son corps."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274091,
				tcgplayer: 84617
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274091,
				tcgplayer: 84617
			}
		}
	]
}

export default card
