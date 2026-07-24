import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Golduck",
		fr: "Krabboss",
		de: "Kingler"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [55],

	hp: 70,

	types: [
		"Water"
	],

	evolveFrom: {
		en: "Krabby",
		fr: "Krabby"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Slash",
				fr: "Écume",
				de: "Blubber"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],

			name: {
				en: "Distortion Beam",
				fr: "Pince géante",
				de: "Riesenklaue"
			},

			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep. If tails, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				de: "Wirf eine Münze. Bei 'Zahl' hat dieser Angriff keine Auswirkungen."
			},

			damage: 30,
		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86455,
				cardmarket: 274890
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
