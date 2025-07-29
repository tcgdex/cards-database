import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Lickitung",
		fr: "Excelangue",
		de: "Schlurp"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		108,
	],

	hp: 80,

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
				en: "Long Tongue",
				fr: "Longue léchouille",
				de: "Lange Zunge"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. Don't apply Weakness and Resistance.",
				fr: "Choisissez un des Pokémon de votre adversaire. Cette attaque inflige 10 dégâts à ce Pokémon. N'appliquez ni la Faiblesse ni la Résistance.",
				de: "Wähle 1 der Pokémon deines Gegners. Dieser Angriff fügt diesem Pokémon 10 Schadenspunkte zu. Wende Schwäche und Resistenz nicht an."
			}

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Body Slam",
				fr: "Plaquage",
				de: "Bodyslam"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275164
	}
}

export default card
