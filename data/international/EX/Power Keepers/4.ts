import { Card } from 'models/database/card'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		'en-us': "Banette",
		'fr-fr': "Branette",
		'de-de': "Banette"
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
		'en-us': "Shuppet",
		'fr-fr': "Polichombr"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Grudge",
				'fr-fr': "Rancune",
				'de-de': "Nachspiel"
			},
			effect: {
				'en-us': "Does 20 damage plus 10 more damage for each Prize card your opponent has taken.",
				'fr-fr': "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque carte Récompense récoltée par votre adversaire.",
				'de-de': "Dieser Angriff fügt 20 Schadenspunkte plus 10 weitere Schadenspunkte für jeden Preis, den dein Gegner bereits genommen hat, zu."
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
				'en-us': "Bench Manipulation",
				'fr-fr': "Manipulation de Banc",
				'de-de': "Bankmanipulation"
			},
			effect: {
				'en-us': "Your opponent flips a number of coins equal to the number of his or her Benched Pokémon. This attack does 40 damage times the number of tails. This attack's damage isn't affected by Weakness or Resistance.",
				'fr-fr': "Votre adversaire lance autant de pièces qu'il a de Pokémon de Banc. Cette attaque inflige 40 dégâts multipliés par le nombre de piles. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse et la Résistance.",
				'de-de': "Dein Gegner wirft eine Anzahl Münzen, die der Anzahl der Pokémon auf seiner Bank entspricht. Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl \"Zahl\" zu. Der Schaden dieses Angriffs wird durch Schwäche und Resistenz des Verteidigenden Pokémon nicht verändert."
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
