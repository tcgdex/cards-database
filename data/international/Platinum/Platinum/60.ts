import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Probopass",
		'fr-fr': "Tarinorme",
		'de-de': "Voluminas"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [476],

	hp: 90,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Nosepass",
		'fr-fr': "Tarinor"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Stealth Rock",
				'fr-fr': "Piège de Roc",
				'de-de': "Stealth Rock"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Hyper Beam",
				'fr-fr': "Ultralaser",
				'de-de': "Hyper Beam"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
				'de-de': "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It freely controls three small units called Mini-Noses using magnetic force."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 88377,
				cardmarket: 278481
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278481,
				tcgplayer: 88377
			}
		}
	],

}

export default card
