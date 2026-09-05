import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Croconaw",
		fr: "Crocrodil obscur",
		de: "Dunkles Tyracroc"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		159,
	],

	hp: 60,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Totodile",
		fr: "Kaiminus",
		de: "Karnimani"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],

			name: {
				en: "Clamping Jaw",
				fr: "Gouffre",
				de: "Verschlingen"
			},

			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn. If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing. (Benching either Pokémon ends this effect.)",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire. Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, celui-ci lance une pièce. Si c'est pile, cette attaque ne fait rien. (Si l'un des deux Pokémon bat en retraite, cet effet prend fin.)",
				de: "Das verteidigende Pokémon kann sich nicht während des nächsten Zuges deines Gegners zurückziehen. Wenn das verteidigende Pokémon während des nächsten Zuges deines Gegners versucht, anzugreifen, wirft dein Gegner eine Münze. Bei „Zahl“ hat dieser Angriff keine Auswirkungen. (Kommt eins der beiden Pokémon auf die Bank, endet dieser Effekt.)"
			},

			damage: 20
		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		en: "It has 49 teeth in its mouth that are constantly replacing themselves. Pull one out, and a new one grows in.",
		fr: "Il a 49 dents dans sa gueule qui se régénèrent constamment. Arrachez-en une et une nouvelle pousse à sa place.",
		de: "Es hat 49 Zähne im Maul, die sich dauernd selbst ersetzen. Ziehe ihm einen Zahn, und ein neuer wächst nach."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274684,
				tcgplayer: 84578
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274684,
				tcgplayer: 84578
			}
		}
	]
}

export default card
