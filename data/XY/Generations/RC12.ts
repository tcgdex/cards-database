import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Gulpin",
		fr: "Gloupti",
		de: "Schluppuck"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		316,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Starvin'",
				fr: "Affamé",
				de: "Kohldampf"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				de: "Wirf 1 Münze. Bei „Zahl“ hat dieser Angriff keine Auswirkungen."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "When Mom gets in the kitchen, the happiest things happen. I can feel my mouth watering!",
		de: "Wenn Mutter in der Küche loslegt, passieren die leckersten Dinge. Mir läuft schon das Wasser im Mund zusammen!"
	},

	thirdParty: {
		cardmarket: 288521
	}
}

export default card
