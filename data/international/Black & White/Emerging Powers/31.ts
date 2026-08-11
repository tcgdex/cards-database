import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Beartic",
		'fr-fr': "Polagriffe",
		'es-es': "Beartic",
		'it-it': "Beartic",
		'pt-br': "Beartic",
		'de-de': "Siberio"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		614,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Cubchoo",
		'fr-fr': "Polarhume",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Icy Wind",
				'fr-fr': "Vent Glace",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Superpower",
				'fr-fr': "Surpuissance",
			},
			effect: {
				'en-us': "You may do 20 more damage. If you do, this Pokémon does 20 damage to itself.",
				'fr-fr': "Vous pouvez infliger 20 dégâts supplémentaires. Dans ce cas, ce Pokémon s'inflige 20 dégâts.",
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
		'en-us': "It freezes its breath to create fangs and claws of ice to fight with. Cold northern areas are its habitat.",
	},

	thirdParty: {
		cardmarket: 279995,
		tcgplayer: 83752
	}
}

export default card
