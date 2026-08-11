import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Meganium",
		'fr-fr': "Meganium",
		'de-de': "Meganie"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [154],

	hp: 130,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Bayleef",
		'fr-fr': "Macronium"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Sleep Powder",
				'fr-fr': "Poudre dodo",
				'de-de': "Schlafpuder"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Giant Bloom",
				'fr-fr': "Pousse géante",
				'de-de': "Riesenblüte"
			},
			effect: {
				'en-us': "Remove 2 damage counters from Meganium.",
				'fr-fr': "Retirez 2 marqueurs de dégât à Meganium.",
				'de-de': "Entferne 2 Schadensmarken von Meganie."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 2,


	description: {
		'en-us': "Meganium's breath has the power to revive dead grass and plants. It can make them healthy again.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87296,
				cardmarket: 279670
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87296,
				cardmarket: 279670
			},
		},
	],

}

export default card
