import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Leavanny",
		'fr-fr': "Manternel",
		'es-es': "Leavanny",
		'it-it': "Leavanny",
		'pt-br': "Leavanny",
		'de-de': "Matrifol"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		542,
	],

	hp: 140,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Swadloon",
		'fr-fr': "Couverdure",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Cleave",
				'fr-fr': "Frappe Adhésive",
			},
			effect: {
				'en-us': "Flip 2 coins. If both of them are heads, discard all Energy attached to the Defending Pokémon.",
				'fr-fr': "Lancez 2 pièces. Si vous obtenez 2 côtés face, défaussez toutes les Énergies attachées au Pokémon Défenseur.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Leaf Blade",
				'fr-fr': "Lame-Feuille",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Upon finding a small Pokémon, it weaves clothing for it from leaves by using the sticky silk secreted from its mouth.",
	},

	thirdParty: {
		cardmarket: 280750,
		tcgplayer: 86688
	}
}

export default card
