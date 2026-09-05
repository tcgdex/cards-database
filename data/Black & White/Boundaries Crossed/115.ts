import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Spinda",
		fr: "Spinda",
		es: "Spinda",
		it: "Spinda",
		pt: "Spinda",
		de: "Pandir"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		327,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Whimsy Tackle",
				fr: "Charge Bizarre",
				de: "Launischer Tackle"
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
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "No two Spinda have the same pattern of spots. Its tottering step fouls the aim of foes.",
		de: "Das Muster eines Pandir ist wie ein Fingerabdruck. Sein Taumeln senkt die gegnerische Zielsicherheit."
	},

	thirdParty: {
		cardmarket: 280702,
		tcgplayer: 89464
	}
}

export default card
