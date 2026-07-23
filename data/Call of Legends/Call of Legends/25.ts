import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Feraligatr",
		fr: "Aligatueur",
		de: "Impergator"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [160],

	hp: 130,

	types: [
		"Water"
	],

	evolveFrom: {
		en: "Croconaw",
		fr: "Crocrodil"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spinning Tail",
				fr: "Queue tournante",
				de: "Kreisender Schweif"
			},
			effect: {
				en: "This attack does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à chaque Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt jedem Pokémon deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Surf",
				fr: "Surf",
				de: "Surfer"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		en: "When it bites with its massive and powerful jaws, it shakes its head and savagely tears its victim up.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85422,
				cardmarket: 279668
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85422,
				cardmarket: 279668
			},
		},
	],

}

export default card
