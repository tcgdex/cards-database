import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Arcanine",
		'fr-fr': "Arcanin",
		'de-de': "Arkani"
	},

	illustrator: "Naoki Saito",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [59],

	hp: 110,

	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Growlithe",
		'fr-fr': "Caninos"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Sharp Fang",
				'fr-fr': "Croc aiguisé",
				'de-de': "Scharfe Fänge"
			},

			damage: 50,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fire Mane",
				'fr-fr': "Crinière de feu",
				'de-de': "Flammenmähne"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "This legendary Chinese Pokémon is considered magnificent. Many people are enchanted by its grand mane."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 83586,
				cardmarket: 278973
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 83586,
				cardmarket: 278973
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 125039,
			}
		},
	],

}

export default card
