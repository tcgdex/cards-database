import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Jolteon",
		fr: "Voltali obscur",
		de: "Dunkles Blitza"
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
		en: "Eevee",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Lightning Flash",
				fr: "Flash éclair",
				de: "Blitzaufleuchten"
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				fr: "Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, votre adversaire doit lancer une pièce. Si c'est pile, cette attaque ne fait rien.",
				de: "Falls das verteidigende Pokémon während des nächsten Zuges deines Gegners anzugreifen versucht, wirft dein gegner eine Münze. Bei 'Zahl' richtet dieser Angriff nichts aus."
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
				en: "Thunder Attack",
				fr: "Attaque tonnerre",
				de: "Donnerangriff"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, Dark Jolteon does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé. Si c'est pile, Voltali obscur s'inflige 10 dégâts.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt gelähmt. Bei 'Zahl' fügt sich Dunkles Blitza selbst 10 Schadenspunkte zu."
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

	description: {
		fr: "Très dangereux quand il se met en colère, il aime s'amuser à électrocuter les gens avec l'électricité qu'il stocke dans son corps."
	},

	thirdParty: {
		cardmarket: 274091
	}
}

export default card
