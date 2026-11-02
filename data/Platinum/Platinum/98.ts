import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Tauros",
		fr: "Tauros",
		de: "Tauros"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [128],

	hp: 70,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Show Off",
				fr: "Crâneur",
				de: "Vorzeigen"
			},
			effect: {
				en: "Search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck une carte Énergie de base. Montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach 1 Basis-Energiekarte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Take Down",
				fr: "Bélier",
				de: "Bodycheck"
			},
			effect: {
				en: "Flip a coin. If tails, Tauros does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, Tauros s'inflige 10 dégâts.",
				de: "Wirf 1 Münze. Bei „Zahl“ fügt Tauros sich selbst 10 Schadenspunkte zu."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		en: "Once it takes aim at its foe, it makes a headlong charge. It is famous for its violent nature.",
		de: "Sobald es einen Gegner ins Visier genommen hat, rennt es mit dem Kopf voran auf ihn zu."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 89765,
				cardmarket: 278519
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278519,
				tcgplayer: 89765
			}
		}
	],

}

export default card
