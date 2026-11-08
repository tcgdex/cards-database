import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Beautifly",
		'fr-fr': "Charmillon",
		'de-de': "Papinella"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		267,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Silcoon",
		'fr-fr': "Armulys",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Whirlwind",
				'fr-fr': "Cyclone",
				'de-de': "Wirbelwind"
			},
			effect: {
				'en-us': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Votre adversaire échange le Pokémon Défenseur avec 1 des Pokémon de son Banc.",
				'de-de': "Dein Gegner tauscht das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Giga Drain",
				'fr-fr': "Giga-sangsue",
				'de-de': "Gigasauger"
			},
			effect: {
				'en-us': "After your attack, remove from Beautifly the number of damage counters equal to the damage you did to the Defending Pokémon.",
				'fr-fr': "Après votre attaque, retirez à Charmillon autant de marqueurs de dégât que vous avez infligé de dégâts au Pokémon Défenseur.",
				'de-de': "Entferne nach deinem Angriff Schadensmarken von Papinella entsprechend der Höhe der Schadenspunkte, die dem Verteidigenden Pokémon zugefügt wurden."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
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
		'en-us': "It has an aggressive nature. It stabs prey with its long, narrow mouth to drain the prey's fluids.",
		'fr-fr': "Il est très agressif. Il pique sa proie avec son long museau étroit et absorbe sa vitalité."
	},

	thirdParty: {
		cardmarket: 277518,
		tcgplayer: 83758
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
