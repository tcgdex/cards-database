import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Lucario",
		'fr-fr': "Lucario",
		'de-de': "Lucario"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		448,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Riolu",
		'fr-fr': "Riolu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Feint",
				'fr-fr': "Ruse",
				'de-de': "Offenlegung"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				'de-de': "Der Schaden dieses Angriffs wird durch die Resistenz des Verteidigenden Pokémon nicht verändert."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Aura Sphere",
				'fr-fr': "Aurasphère",
				'de-de': "Aurasphäre"
			},
			effect: {
				'en-us': "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegeners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It has the ability to sense the auras of all things. It understands human speech.",
	},

	thirdParty: {
		cardmarket: 277505,
		tcgplayer: 86873
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
