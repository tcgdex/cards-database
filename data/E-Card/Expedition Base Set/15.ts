import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Houndoom",
		fr: "Krabboss",
		de: "Kingler"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [229],

	hp: 70,

	types: [
		"Darkness"
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
				en: "Fireworks",
				fr: "Écume",
				de: "Blubber"
			},
			effect: {
				en: "Flip a coin. If tails, discard a Fire Energy card attached to Houndoom.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],

			name: {
				en: "Dark Impact",
				fr: "Pince géante",
				de: "Riesenklaue"
			},

			effect: {
				en: "The Defending Pokémon can't use any Poké-Powers until the end of your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				de: "Wirf eine Münze. Bei 'Zahl' hat dieser Angriff keine Auswirkungen."
			},

			damage: 40,
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],,
	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 86453,
				cardmarket: 274890
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
