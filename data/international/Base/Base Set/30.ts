import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Ivysaur",
		'fr-fr': "Herbizarre",
		'de-de': "Bisaknosp",
		'it-it': "Ivysaur"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		2,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Bulbasaur",
		'fr-fr': "Bulbizarre",
		'it-it': "Bulbasaur"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Vine Whip",
				'fr-fr': "Fouet Lianes",
				'de-de': "Rankenhieb",
				'it-it': "Frustata"
			},

			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Poisonpowder",
				'fr-fr': "Poudre Toxik",
				'de-de': "Giftpuder",
				'it-it': "Velenpolvere"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Das verteidigende Pokémon ist vergiftet.",
				'it-it': "Il Pokémon Difensore è Avvelenato."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "When the bulb on its back grows large, the Pokémon seems to lose the ability to stand on its hind legs.",
		'fr-fr': "Son bulbe dorsal devient si gros qu'il ne peut plus se tenir sur ses membres postérieurs.",
		'it-it': "Quando la pianta che ha sul dorso cresce, questo Pokémon non è più in grado di mantenersi eretto sulle zampe posteriori. LIV 20 N.2"
	},

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273725,
				tcgplayer: 42372
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107027
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107027
			},
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
