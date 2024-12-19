import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Magmar",
		fr: "Magmar",
		de: "Magmar"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		126,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Smokescreen",
				fr: "Brouillard",
				de: "Rauchwolke"
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				fr: "Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, votre adversaire doit lancer une pièce. Si c'est pile, cette attaque n'a aucun effet.",
				de: "Falls das verteidigende Pokémon während des nächsten gegnerischen Zuges anzugreifen veruscht, wirft dein gegner eine Münze. Bei 'Zahl' fügt dieser Angriff keine Schadenspunkte zu."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],

			name: {
				en: "Smog",
				fr: "Purédpois",
				de: "Smog"
			},

			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt vergiftet."
			},

			damage: 20
		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	description: {
		fr: "On le trouve dans le coeur des volcans où il est très difficile à repérer. On compte très peu de captures de ce Pokémon."
	}
}

export default card
