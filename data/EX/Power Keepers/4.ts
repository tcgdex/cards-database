import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Banette",
		fr: "Branette",
		de: "Banette"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		354,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Shuppet",
		fr: "Polichombr"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Grudge",
				fr: "Rancune",
				de: "Nachspiel"
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Prize card your opponent has taken.",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque carte Récompense récoltée par votre adversaire.",
				de: "Dieser Angriff fügt 20 Schadenspunkte plus 10 weitere Schadenspunkte für jeden Preis, den dein Gegner bereits genommen hat, zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Bench Manipulation",
				fr: "Manipulation de Banc",
				de: "Bankmanipulation"
			},
			effect: {
				en: "Your opponent flips a number of coins equal to the number of his or her Benched Pokémon. This attack does 40 damage times the number of tails. This attack's damage isn't affected by Weakness or Resistance.",
				fr: "Votre adversaire lance autant de pièces qu'il a de Pokémon de Banc. Cette attaque inflige 40 dégâts multipliés par le nombre de piles. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse et la Résistance.",
				de: "Dein Gegner wirft eine Anzahl Münzen, die der Anzahl der Pokémon auf seiner Bank entspricht. Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl \"Zahl\" zu. Der Schaden dieses Angriffs wird durch Schwäche und Resistenz des Verteidigenden Pokémon nicht verändert."
			},
			damage: "40x",

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 277310,
		tcgplayer: 83721
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
