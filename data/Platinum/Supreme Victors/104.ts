import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Feebas",
		fr: "Barpau",
		de: "Barschwa"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		349,
	],

	hp: 30,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Surprise Attack",
				fr: "Attaque surprise",
				de: "Überraschungsangriff"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
				de: "Wirf 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Count and Draw",
				fr: "Compter et piocher",
				de: "Zählen und Ziehen"
			},
			effect: {
				en: "Draw a card for each of your opponent's Pokémon that isn't an Evolved Pokémon.",
				fr: "Piochez une carte pour chaque Pokémon de votre adversaire qui n'est pas un Pokémon Évolué.",
				de: "Ziehe 1 Karte für jedes Pokémon deines Gegners, das kein entwickeltes Pokémon ist."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278795
	}
}

export default card
