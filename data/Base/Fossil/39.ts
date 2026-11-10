import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Magmar",
		fr: "Magmar",
		it: "Magmar",
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

	evolveFrom: {
		en: "Magby",
		fr: "Magby",
		de: "Magby"
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Smokescreen",
				fr: "Brouillard",
				it: "Cortina Fumogena",
				de: "Rauchwolke"
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				fr: "Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, votre adversaire doit lancer une pièce. Si c'est pile, cette attaque n'a aucun effet.",
				it: "Se durante il prossimo turno del tuo avversario il Pokémon Difensore prova ad attaccare, il tuo avversario lancia una moneta. Se esce croce, quell'attacco non ha effetto.",
				de: "Falls das verteidigende Pokémon während des nächsten Zuges anzugreifen versucht, wirft dein Gegner eine Münze. Bei „Zahl“ fügt dieser Angriff keine Schadenspunkte zu."
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
				it: "Smog",
				de: "Smog"
			},

			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				it: "Lancia una moneta. Se esce testa, il Pokémon Difensore è Avvelenato.",
				de: "Wirf eine Münze. Bei „Kopf“ ist das verteidigende Pokémon jetzt vergiftet."
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
	retreat: 1,


	description: {
		en: "Found at the mouths of volcanoes and extremely hard to spot. There are very few instances of capturing this Pokémon.",
		fr: "On le trouve dans le coeur des volcans où il est très difficile à repérer. On compte très peu de captures de ce Pokémon.",
		it: "Lo si può trovare vicino alle bocche dei vulcani, ma è molto difficile da individuare. Le possibilità di catturare uno di questi Pokémon sono estremamente basse.",
		de: "Im Schlund von Vulkanen anzutreffen, aber extrem schwer auszumachen. Dieses Pokémon wird nur höchst selten eingefangen."
	},


	variants: [
		{
			type: "normal",
			subtype: "1999-2000-copyright",
			thirdParty: {
				cardmarket: 273900,
				tcgplayer: 44441
			}
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273900,
				tcgplayer: 44441
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273900,
				tcgplayer: 44441
			}
		},
	],
}

export default card
