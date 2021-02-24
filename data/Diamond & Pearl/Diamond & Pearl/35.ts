import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Pachirisu",
		fr: "Pachirisu",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		417,
	],
	hp: 70,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Minor Errand-Running",
				fr: "Rendez-vous mineur",
			},
			effect: {
				en: "Search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck une carte Énergie de base, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Thunder Jolt",
				fr: "Secousse tonnerre",
			},
			effect: {
				en: "Flip a coin. If tails, Pachirisu does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, Pachirisu s'inflige 10 dégâts.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
