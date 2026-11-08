import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Armaldo",
		'fr-fr': "Armaldo",
		'de-de': "Armaldo"
	},

	illustrator: "Kazuaki Aihara",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		348,
	],

	hp: 140,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Anorith",
		'fr-fr': "Anorith",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Fossil Armor",
				'fr-fr': "Armure fossile",
				'de-de': "Fossilpanzer"
			},
			effect: {
				'en-us': "If Armaldo would be damaged by an attack, prevent that attack's damage done to Armaldo if that damage is 60 or less.",
				'fr-fr': "Si une attaque inflige des dégâts à Armaldo, prévenez les dégâts de cette attaque si ces dégâts sont de 60 ou moins.",
				'de-de': "Wenn Armaldo durch einen Angriff 60 oder weniger Schadenspunkte zugefügt würden, verhindere diesen Schaden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Crush Claw",
				'fr-fr': "Éclategriffe",
				'de-de': "Zermalmklaue"
			},
			effect: {
				'en-us': "During your next turn, if an attack does damage to the Defending Pokémon (after applying Weakness and Resistance), that attack does 40 more damage.",
				'fr-fr': "Lors de votre prochain tour, si une attaque inflige des dégâts au Pokémon Défenseur (après application de la Faiblesse et de la Résistance), cette attaque inflige 40 dégâts supplémentaires.",
				'de-de': "Während deines nächsten Zuges, wenn ein Angriff dem Verteidigenden Pokémon Schaden zufügt (nachdem Schwäche und Resistenz verrechnet wurden), fügt dieser Angriff 40 weitere Schadenspunkte zu."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+30"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It went ashore after evolving. Its entire body is clad in a sturdy armor.",
		'fr-fr': "Il a gagné la côte après son évolution. Une armure robuste recouvre son corps."
	},

	thirdParty: {
		cardmarket: 278167,
		tcgplayer: 83621
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
