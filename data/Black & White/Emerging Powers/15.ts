import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Deerling",
		fr: "Vivaldaim",
		es: "Deerling",
		it: "Deerling",
		pt: "Deerling",
		de: "Sesokitz"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		585,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				de: "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Wild Kick",
				fr: "Coup Déchaîné",
				de: "Stürmischer Kick"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				de: "Wirf 1 Münze. Bei „Zahl“ hat dieser Angriff keine Auswirkungen."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "The turning of the seasons changes the color and scent of this Pokémon's fur. People use it to mark the seasons.",
		de: "Sein Fell und sein Geruch ändern sich mit dem Wechsel der Jahreszeiten. Es ist der Bote des Saisonwechsels."
	},

	thirdParty: {
		cardmarket: 279980,
		tcgplayer: 84725
	}
}

export default card
