import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Grimer",
		fr: "Gravalanch",
		de: "Georok"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [88],

	hp: 50,

	types: [
		"Grass"
	],

	evolveFrom: {
		en: "Geodude",
		fr: "Racaillou"
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Poison Sludge",
				fr: "Lance-pierre",
				de: "Steinschleuderer"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				fr: "N'appliquez pas la Résistance.",
				de: "Wende Resistenz nicht an."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Rock Slide",
				fr: "Éboulement",
				de: "Steinhagel"
			},
			effect: {
				en: "Chose 2 of your opponent's Pokémon (1 if he or she has only 1). This attack does 10 damage to each of those Pokémon. (Don't apply Weakness and Resistance for those Pokémon.",
				fr: "Choisissez 2 des Pokémon du Banc de votre adversaire (1 seul s'il n'en a qu'un). Cette attaque inflige 10 dégâts à chacun de ces Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon du Banc.)",
				de: "Bestimme 2 der Pokémon auf der Bank deines Gegners (1, wenn er nur 1 hat). Dieser Angriff fügt jedem dieser Pokémon 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85888,
				cardmarket: 274954
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
