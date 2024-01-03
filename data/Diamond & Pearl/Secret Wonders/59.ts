import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Pinsir",
		fr: "Scarabrute",
		de: "Pinsir"
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		127,
	],
	hp: 80,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Grip and Squeeze",
				fr: "Empoigner et presser",
				de: "Grapschen und Quetschen"
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
				de: "Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Power Guillotine",
				fr: "Guillotine puissante",
				de: "Kräftige Guillotine"
			},
			effect: {
				en: "Flip 2 coins. If either of them is tails, this attack's base damage is 10 instead of 100.",
				fr: "Lancez 2 pièces. Si vous obtenez une pile, les dégâts de base de cette attaque sont de 10 au lieu de 100.",
				de: "Wirf 2 Münzen. Wenn eine oder beide Münzen \"Zahl\" gezeigt haben, beträgt der Grundschaden dieses Angriffs 10 Schadenspunkte anstelle von 100 Schadenspunkten."
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
