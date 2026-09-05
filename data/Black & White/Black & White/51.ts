import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Swoobat",
		fr: "Rhinolove",
		es: "Swoobat",
		it: "Swoobat",
		pt: "Swoobat",
		de: "Fletiamo"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		528,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Woobat",
		fr: "Chovsourir",
		de: "Fleknoil"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Attract",
				fr: "Attraction",
				de: "Anziehung"
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				fr: "Si le Pokémon Défenseur essaie d’attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c’est pile, son attaque ne fait rien.",
				de: "Falls das Verteidigende Pokémon während des nächsten Zuges deines Gegners angreift, wirft dein Gegner 1 Münze. Bei „Zahl“ hat dieser Angriff keine Auswirkungen."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Heart Stamp",
				fr: "Crèvecœur",
				de: "Herzstempel"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
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
		en: "It emits sound waves of various frequencies from its nose, including some powerful enough to destroy rocks.",
		de: "Es sendet über seine Nase Schallwellen mit verschiedenen Frequenzen aus. Mit manchen kann es sogar Felsen zerstören."
	},

	thirdParty: {
		cardmarket: 279789,
		tcgplayer: 89724
	}
}

export default card
