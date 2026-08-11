import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Chandelure",
		'fr-fr': "Lugulabre",
		'es-es': "Chandelure",
		'it-it': "Chandelure",
		'pt-br': "Chandelure",
		'de-de': "Skelabra"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		609,
	],

	hp: 120,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Lampent",
		'fr-fr': "Mélancolux",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Flame Burst",
				'fr-fr': "Rebondifeu",
			},
			effect: {
				'en-us': "Does 30 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 30 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Inferno",
				'fr-fr': "Feu d'Enfer",
			},
			effect: {
				'en-us': "Discard all Energy attached to this Pokémon. The Defending Pokémon is now Burned.",
				'fr-fr': "Défaussez toutes les Énergies attachées à ce Pokémon. Le Pokémon Défenseur est maintenant Brûlé.",
			},
			damage: 80,

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
		'en-us': "Being consumed in Chandelure's flame burns up the spirit, leaving the body behind.",
	},

	thirdParty: {
		cardmarket: 280245,
		tcgplayer: 91397
	}
}

export default card
