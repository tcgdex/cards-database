import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Vanilluxe",
		'fr-fr': "Sorbouboul",
		'es-es': "Vanilluxe",
		'it-it': "Vanilluxe",
		'pt-br': "Vanilluxe",
		'de-de': "Gelatwino"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		584,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Vanillish",
		'fr-fr': "Sorboul",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Double Freeze",
				'fr-fr': "Double Gelure",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 40 damage times the number of heads. If either of them is heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face. Si vous obtenez au moins un côté face, le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Frost Breath",
				'fr-fr': "Souffle Glacé",
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "If both heads get angry simultaneously, this Pokémon expels a blizzard, burying everything in snow.",
	},

	thirdParty: {
		cardmarket: 280152,
		tcgplayer: 90273
	}
}

export default card
