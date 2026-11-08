import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Octillery",
		'fr-fr': "Octillery",
		'es-es': "Octillery",
		'it-it': "Octillery",
		'pt-br': "Octillery",
		'de-de': "Octillery"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		224,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Remoraid",
		'fr-fr': "Rémoraid",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Sharpshooting",
				'fr-fr': "Tir de Précision",
			},
			effect: {
				'en-us': "This attack does 30 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 30 dégâts à 1 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Bubble Beam",
				'fr-fr': "Bulles d'O",
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It has a tendency to want to be in holes. It prefers rock crags or pots and sprays ink from them before attacking.",
	},

	thirdParty: {
		cardmarket: 281040,
		tcgplayer: 87835
	}
}

export default card
