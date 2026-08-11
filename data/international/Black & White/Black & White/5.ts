import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Serperior",
		'fr-fr': "Majaspic",
		'es-es': "Serperior",
		'it-it': "Serperior",
		'pt-br': "Serperior",
		'de-de': "Serpiroyal"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		497,
	],

	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Servine",
		'fr-fr': "Lianaja",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Vine Whip",
				'fr-fr': "Fouet Lianes",
			},

			damage: 40,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Leaf Storm",
				'fr-fr': "Tempêteverte",
			},
			effect: {
				'en-us': "Heal 20 damage from each of your Grass Pokémon.",
				'fr-fr': "Soignez 20 dégâts à chacun de vos Pokémon Grass.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "They raise their heads to intimidate opponents but only give it their all when fighting a powerful opponent.",
	},

	thirdParty: {
		cardmarket: 279743,
		tcgplayer: 89069
	}
}

export default card
