import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Abomasnow",
		'fr-fr': "Blizzaroi",
		'es-es': "Abomasnow",
		'it-it': "Abomasnow",
		'pt-br': "Abomasnow",
		'de-de': "Rexblisar"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		460,
	],

	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Snover",
		'fr-fr': "Blizzi",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Razor Leaf",
				'fr-fr': "Tranch'Herbe",
			},

			damage: 40,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Bang Heads",
				'fr-fr': "Choc Frontal",
			},
			effect: {
				'en-us': "Both this Pokémon and the Defending Pokémon are now Confused.",
				'fr-fr': "Ce Pokémon et le Pokémon Défenseur sont maintenant Confus.",
			},
			damage: 80,

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
		'en-us': "They appear when the snow flowers bloom. When the petals fall, they retreat to places unknown again.",
	},

	thirdParty: {
		cardmarket: 281047,
		tcgplayer: 83442
	}
}

export default card
