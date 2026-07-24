import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Rapidash",
		fr: "Galopa",
		de: "Gallopa"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [78],

	hp: 70,

	types: [
		"Fire"
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
				en: "Overrun",
				fr: "Dépassement",
				de: "Überennen"
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, flip a coin. If heads, choose 1 of them and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Si votre adversaire a des Pokémon sur son Banc, lancez une pièce. Si c'est face, choisissez-en un et cette attaque lui inflige 10 dégâts. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon du Banc.)",
				de: "Falls dein gegner mindestens ein Pokémon auf der Bank hat, wirf eine Münze. Wähle bei \"Kopf\" 1 von diesen, und dieser Angriff fügt diesem Pokémon 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei dem Pokémon auf der Bank nicht an)"
			},
			damage: 20,

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
			type: "Water",
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
			thirdParty: {
				tcgplayer: 88576,
				cardmarket: 274901
			},
		},
	],
	retreat: 0,
}

export default card
