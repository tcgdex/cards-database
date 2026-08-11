import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Meganium",
		'fr-fr': "Meganium",
		'de-de': "Meganie"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [154],

	hp: 100,

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
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Solarbeam",
				'fr-fr': "Lance-soleil",
				'de-de': "Solarstrahl"
			},

			damage: 50,

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
			value: "-30"
		},
	],
	retreat: 3,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87289,
				cardmarket: 274893
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87289,
				cardmarket: 274893
			},
		},
	],
}

export default card
