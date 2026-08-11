import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Vespiquen",
		'fr-fr': "Apireine",
		'es-es': "Vespiquen",
		'it-it': "Vespiquen",
		'pt-br': "Vespiquen",
		'de-de': "Honweisel"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		416,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Combee",
		'fr-fr': "Apitrini",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Gather Order",
				'fr-fr': "Ralliement",
			},
			effect: {
				'en-us': "Search your deck for as many Combee as you like and put them onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck autant d'Apitrini que vous voulez et placez-les sur votre Banc. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Damage Beat",
				'fr-fr': "Rouste Ravageuse",
			},
			effect: {
				'en-us': "Does 20 damage times the number of damage counters on the Defending Pokémon.",
				'fr-fr': "Inflige 20 dégâts multipliés par le nombre de marqueurs de dégâts placés sur le Pokémon Défenseur.",
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
		'en-us': "It houses its colony in cells in its body and releases various pheromones to make those grubs do its bidding.",
	},

	thirdParty: {
		cardmarket: 280745,
		tcgplayer: 90330
	}
}

export default card
