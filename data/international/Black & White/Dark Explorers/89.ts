import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Haxorus",
		'fr-fr': "Tranchodon",
		'es-es': "Haxorus",
		'it-it': "Haxorus",
		'pt-br': "Haxorus",
		'de-de': "Maxax"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		612,
	],

	hp: 140,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Fraxure",
		'fr-fr': "Incisache"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Guillotine",
				'fr-fr': "Guillotine"
			},

			damage: 60,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Stunning Uppercut",
				'fr-fr': "Uppercut Assommant"
			},
			effect: {
				'en-us': "Flip 2 coins. If both of them are heads, the Defending Pokémon is now Paralyzed. If both of them are tails, this attack does nothing.",
				'fr-fr': "Lancez 2 pièces. Si vous obtenez 2 côtés face, le Pokémon Défenseur est maintenant Paralysé. Si vous obtenez 2 côtés pile, cette attaque ne fait rien."
			},
			damage: 80,

		},
	],

	retreat: 3,

	description: {
		'en-us': "Their sturdy tusks will stay sharp even if used to cut steel beams. These Pokémon are covered in hard armor.",
	},

	thirdParty: {
		cardmarket: 280417,
		tcgplayer: 86033
	}
}

export default card
