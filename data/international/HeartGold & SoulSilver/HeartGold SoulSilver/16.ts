import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Butterfree",
		'fr-fr': "Papilusion",
		'de-de': "Smettbo"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [12],

	hp: 120,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Metapod",
		'fr-fr': "Chrysacier"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Cure Powder",
				'fr-fr': "Poudre de soins",
				'de-de': "Heilstaub"
			},
			effect: {
				'en-us': "Remove 3 damage counters from each of your Pokémon.",
				'fr-fr': "Retirez 3 marqueurs de dégâts de chacun de vos Pokémon.",
				'de-de': "Entferne 3 Schadensmarken von jedem deiner Pokémon."
			},

		},
		{
			cost: [
				"Grass",
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
				'fr-fr': "Votre adversaire échange le Pokémon Défenseur avec l’un des Pokémon de son Banc.",
				'de-de': "Dein Gegner tauscht das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 60,

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

	retreat: 0,

	description: {
		'en-us': "Water-repellent powder on its wings enables it to collect honey, even in the heaviest of rains."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84067,
				cardmarket: 278988
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84067,
				cardmarket: 278988
			}
		},
	],

}

export default card
