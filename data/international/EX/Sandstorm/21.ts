import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Sandslash",
		'fr-fr': "Sablaireau",
		'de-de': "Sandamer"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [28],

	hp: 70,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Sandshrew",
		'fr-fr': "Sabelette"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Sand Swirl",
				'fr-fr': "Tourbillon de sable",
				'de-de': "Sandstrudel"
			},
			effect: {
				'en-us': "Does 20 damage to each Defending Pokémon. The Defending Pokémon can't retreat until the end of your opponent's next turn.",
				'fr-fr': "Inflige 20 dégâts à chaque Pokémon Défenseur. Le ou les Pokémon Défenseurs ne peuvent pas battre en retraite jusqu'à la fin du prochain tour de votre adversaire.",
				'de-de': "Fügt allen Verteidigenden Pokémon 20 Schadenspunkte zu. Die Verteidigenden Pokémon können sich bis zum Ende des nächsten gegnerischen Zuges nicht zurückziehen."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Earthquake",
				'fr-fr': "Séisme",
				'de-de': "Erdbeben"
			},
			effect: {
				'en-us': "Does 10 damage to each of your Benched Pokémon. (Don't apply Weakness or Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à chaque Pokémon de votre Banc. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc).",
				'de-de': "Fügt jedem Pokémon auf deiner Bank 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 0,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275798,
				tcgplayer: 88928
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275798,
				tcgplayer: 88928
			}
		},
	],

}

export default card
