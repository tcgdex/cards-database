import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Togepi",
		fr: "Togepi",
		de: "Togepi"
	},

	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		175,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Charm",
				fr: "Charme",
				de: "Charme"
			},
			effect: {
				en: "If the Defending Pokémon attacks during your opponent's next turn, any damage it does is reduced by 10 (before applying Weakness and Resistance).",
				fr: "Si le Pokémon Défenseur attaque pendant le prochain tour de votre adversaire, tous les dégâts qu'il inflige sont réduits de 10 (avant application de la Faiblesse et de la Résistance).",
				de: "Wenn das verteidigende Pokémon während des nächsten Zuges deines Gegners angreift, wird aller Schaden, den es zufügt, um 10 reduziert (vor der Verrechnung von Schwäche und Resistenz)."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spike Ball Tackle",
				fr: "Charge balle pic",
				de: "Zackenballtackle"
			},
			effect: {
				en: "Togepi does 10 damage to itself.",
				fr: "Togepi s'inflige 10 dégâts.",
				de: "Togepi fügt sich selber 10 Schadenspunkte zu."
			},
			damage: 20,

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		en: "Its shell is said to contain happiness itself, which it will share with those who are kind to it.",
		fr: "On raconte que sa coquille est pleine de bonheur, qu'il partage avec tous ceux qui sont gentils avec lui.",
		de: "Es wird behauptet, dass seine Haut Fröhlichkeit enthält, die es gerne mit allen teilt, die nett zu ihm sind."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274708,
				tcgplayer: 89930
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274708,
				tcgplayer: 89930
			}
		}
	]
}

export default card
