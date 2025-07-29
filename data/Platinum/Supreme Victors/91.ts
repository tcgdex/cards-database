import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Bidoof",
		fr: "Keunotor",
		de: "Biditza"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		399,
	],

	hp: 60,

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
				en: "Whimsy Tackle",
				fr: "Charge capricieuse",
				de: "Launischer Tackle"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
				de: "Wirf 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
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

	retreat: 2,

	thirdParty: {
		cardmarket: 278782
	}
}

export default card
