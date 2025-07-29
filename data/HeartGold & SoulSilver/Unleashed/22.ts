import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Primeape",
		fr: "Colossinge",
		de: "Rasaff"
	},

	illustrator: "Sachiko Adachi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		57,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Mankey",
		fr: "Férosinge",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Low Kick",
				fr: "Balayage",
				de: "Fußkick"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Bebop Punch",
				fr: "Rythmofrappe",
				de: "Bebop-Hieb"
			},
			effect: {
				en: "Choose 1 of your opponent’s Pokémon. Flip a coin until you get tails. This attack does 50 damage times the number of heads to that Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez l’un des Pokémon de votre adversaire. Lancez une pièce jusqu’à ce qu’elle tombe sur pile. Cette attaque inflige à ce Pokémon 50 dégâts multipliés par le nombre de côtés face. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				de: "Wähle 1 Pokémon deines Gegners. Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Dieser Angriff fügt dem gewählten Pokémon 50 Schadenspunkte mal der Anzahl \"Kopf\" zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an)."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "If approached while asleep, it may awaken and angrily give chase in a groggy state of semi-sleep."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279178
	}
}

export default card
