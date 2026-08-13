import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Zapdos",
		fr: "Élector",
		de: "Zapdos"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		145,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Thunderstorm",
				fr: "Orage",
				de: "Gewitter"
			},
			effect: {
				en: "For each of your opponent's Benched Pokémon, flip a coin. If heads, this attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Then, Zapdos does 10 damage times the number of tails to itself.",
				fr: "Pour chacun des Pokémon du Banc de votre adversaire, lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts au Pokémon concerné. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.) Ensuite, Élector s'inflige 10 dégâts pour chaque pile.",
				de: "Wirf eine Münze für jedes Pokémon auf der Bank deines Gegners. Bei „Kopf“ fügt dieser Angriff diesem Pokémon 20 Schadenspunkte zu. (Schwäche und Resistenz für Pokémon auf der Bank nicht anwenden.) Danach fügt sich Zapdos jedesmal, wenn die Münze „Kopf“ zeigt, selbst 10 Schadenspunkte zu."
			},
			damage: 40,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 2,


	description: {
		en: "A legendary thunderbird Pokémon whose anger is said to cause storms. Some say it has lived above the clouds for thousands of years.",
		fr: "L'oiseau légendaire de la foudre. Il surgit hors des nuages en lançant d'énormes éclairs.",
		de: "Ein legendäres Donnervogel-Pokémon, dessen Zorn Stürme auslösen soll. Man sagt, dass es schon tausende von Jahren über den Wolken gelebt hat."
	},


	variants: [
		{
			type: "normal",
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273876,
				tcgplayer: 106532
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273876,
				tcgplayer: 106532
			}
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
