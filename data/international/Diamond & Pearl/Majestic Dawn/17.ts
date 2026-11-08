import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Empoleon",
		'fr-fr': "Pingoléon",
		'de-de': "Impoleon"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		395,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Prinplup",
		'fr-fr': "Prinplouf",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Dual Splash",
				'fr-fr': "Double splash",
				'de-de': "Doppelplatscher"
			},
			effect: {
				'en-us': "Choose 2 of your opponent's Pokémon. This attack does 30 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 2 des Pokémon de votre adversaire. Cette attaque inflige 30 dégâts à chacun de ces Pokémon. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Wähle 2 Pokémon deines Gegners. Dieser Angriff fügt jedem gewählten Pokémon 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Surf Together",
				'fr-fr': "Surf en groupe",
				'de-de': "Surfgemeinschaft"
			},
			effect: {
				'en-us': "Does 50 damage plus 10 more damage for each of your Benched Pokémon. Flip a coin. If tails, this attack does 10 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 50 dégâts plus 10 dégâts supplémentaires pour chaque Pokémon sur votre Banc. Lancez une pièce. Si c'est pile, cette attaque inflige 10 dégâts à chacun des Pokémon de votre Banc. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Dieser Angriff fügt 50 Schadenspunkte plus 10 weitere Schadenspunkte für den Pokémon auf deiner Bank zu. Wirf 1 Münze. Bei \"Zahl\" fügt dieser Angriff allen Pokémon auf deiner Bank 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+30"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It swims as fast as a jet boat. The edges of its wings are sharp and can slice apart drifting ice.",
	},

	thirdParty: {
		cardmarket: 278066,
		tcgplayer: 85198
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["dylan-lefavour"]
		}
	]
}

export default card
