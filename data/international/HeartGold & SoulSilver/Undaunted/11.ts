import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Dodrio",
		'fr-fr': "Dodrio",
		'de-de': "Dodri"
	},

	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [85],

	hp: 80,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Doduo",
		'fr-fr': "Doduo"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Retreat Aid",
				'fr-fr': "Soutien de retraite",
				'de-de': "Rückzugshilfe"
			},
			effect: {
				'en-us': "As long as Dodrio is on your Bench, your Active Pokémon's Retreat Cost is ColorlessColorless less.",
				'fr-fr': "Tant que Dodrio est sur votre Banc, le Coût de retraite de votre Pokémon Actif est réduit de ColorlessColorless.",
				'de-de': "Solange Dodri auf deiner Bank sitzt, betragen die Rückzugskosten deines Aktiven Pokémon  weniger."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Incessant Peck",
				'fr-fr': "Rafal’Bec",
				'de-de': "Dauerpicker"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 20 damage plus 20 more damage for each heads.",
				'fr-fr': "Lancez une pièce jusqu’à ce qu’elle tombe sur pile.  Cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires pour chaque côté face.",
				'de-de': "Wirf solange 1 Münze, bis das Ergebnis \"Zahl\" kommt. Dieser Angriff fügt 20 Schadenspunkte plus 20 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It collects data and plans three times as wisely, but it may think too much and fall into a state of immobility."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279264,
				tcgplayer: 84854
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279264,
				tcgplayer: 84854
			}
		}
	],

}

export default card
