import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Lairon",
		'fr-fr': "Galegon",
		'de-de': "Stollrak"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [305],

	hp: 80,

	types: [
		"Metal"
	],

	evolveFrom: {
		'en-us': "Aron",
		'fr-fr': "Galekid"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Magnitude",
				'fr-fr': "Ampleur",
				'de-de': "Intensität"
			},
			effect: {
				'en-us': "Does 10 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à chacun des Pokémon du Banc (les vôtres et ceux de votre adversaire). (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc).",
				'de-de': "Fügt allen Pokémon auf der Bank 10 Schadenspunkte zu (deinen und den gegnerischen). (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "One-Two Strike",
				'fr-fr': "En deux coups",
				'de-de': "Links-Rechts-Kombo"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 damage plus 20 more damage for each heads.",
				'fr-fr': "Lancez deux pièces. Cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque face.",
				'de-de': "Wirf zwei Münzen. Dieser Angriff fügt 30 Schadenspunkte plus 20 Schadenspunkte für jede Münze, die das Ergebnis 'Kopf' zeigt, zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],


	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275685,
				tcgplayer: 86574
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275685,
				tcgplayer: 86574
			}
		},
	],

}

export default card
