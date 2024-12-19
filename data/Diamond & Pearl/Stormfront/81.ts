import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Voltorb",
		fr: "Voltorbe",
		de: "Voltobal"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		100,
	],

	hp: 60,

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
				en: "Outlet",
				fr: "Exutoire",
				de: "Stromquelle"
			},
			effect: {
				en: "Search your deck for a Lightning Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck une carte Énergie Lightning, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach einer -Energiekarte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Bouncing Ball",
				fr: "Balle rebondissante",
				de: "Hüpfender Ball"
			},
			effect: {
				en: "Flip a coin. If tails, Voltorb does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, Voltorbe s'inflige 10 dégâts.",
				de: "Wirf 1 Münze. Bei \"Zahl\" fügt sich Voltobal selbst 10 Schadenspunkte zu."
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

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		fr: "Il ressemble à une Poké Ball. Ce Pokémon dangereux peut exploser ou s'électrifier au toucher."
	}
}

export default card
