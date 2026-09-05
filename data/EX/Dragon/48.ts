import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Whiscash",
		fr: "Barbicha",
		de: "Welsar"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [340],

	hp: 90,

	types: [
		"Water"
	],

	evolveFrom: {
		en: "Barboach",
		fr: "Barloche",
		de: "Schmerbe"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Submerge",
				fr: "Submerger",
				de: "Untertauchen"
			},
			effect: {
				en: "As long as Whiscash is on your Bench, prevent all damage done to Whiscash by your opponent's attacks.",
				fr: "Tant que Barbicha est sur votre Banc, prévenez tous les dégâts qui lui sont infligés par des attaques de votre adversaire.",
				de: "Solange sich Welsar auf deiner Bank befindet, verhindere allen Schaden, der Welsar durch gegnerische Angriffe zugefügt wird."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Surf",
				fr: "Surf",
				de: "Surfer"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Magnitude",
				fr: "Ampleur",
				de: "Intensität"
			},
			effect: {
				en: "Does 10 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chacun des Pokémon du Banc (les vôtres et ceux de votre adversaire). (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.)",
				de: "Fügt allen Pokémon auf der Bank 10 Schadenspunkte zu (deinen und den gegnerischen). (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "x2"
		},
	],
	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90574,
				cardmarket: 275925
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 90574,
				cardmarket: 275925
			},
		},
	],

}

export default card
