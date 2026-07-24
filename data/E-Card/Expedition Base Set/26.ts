import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Octillery",
		fr: "Galopa",
		de: "Gallopa"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [224],

	hp: 80,

	types: [
		"Water"
	],

	evolveFrom: {
		en: "Ponyta",
		fr: "Ponyta"
	},

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Suction Cups",
			},
			effect: {
				en: "As long as Octillery is your Active Pokémon, whenever the Defending Pokémon retreats, discard all Energy cards attached to the Defending Pokémon when it goes to the Bench.",
			},
		},
	],,
	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Smokescreen",
				fr: "Dépassement",
				de: "Überennen"
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				fr: "Si votre adversaire a des Pokémon sur son Banc, lancez une pièce. Si c'est face, choisissez-en un et cette attaque lui inflige 10 dégâts. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon du Banc.)",
				de: "Falls dein gegner mindestens ein Pokémon auf der Bank hat, wirf eine Münze. Wähle bei \"Kopf\" 1 von diesen, und dieser Angriff fügt diesem Pokémon 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei dem Pokémon auf der Bank nicht an)"
			},
			damage: 40,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flame Tail",
				fr: "Queue de flammes",
				de: "Flammenschweif"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88576,
				cardmarket: 274901
			},
		},
		{
			type: "reverse",
		}
	],
	retreat: 2,
}

export default card
