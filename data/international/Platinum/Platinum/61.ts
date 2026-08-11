import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Seviper",
		'fr-fr': "Seviper",
		'de-de': "Vipitis"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [336],

	hp: 80,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Shed Skin",
				'fr-fr': "Mue",
				'de-de': "Shed Skin"
			},
			effect: {
				'en-us': "Remove 4 damage counters from Seviper.",
				'fr-fr': "Retirez à Seviper 4 marqueurs de dégât.",
				'de-de': "Remove 4 damage counters from Seviper."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Bite and Escape",
				'fr-fr': "Mordre avant de s'échapper",
				'de-de': "Bite and Escape"
			},
			effect: {
				'en-us': "You may switch Seviper with 1 of your Benched Pokémon.",
				'fr-fr': "Vous pouvez échanger Seviper avec 1 des Pokémon de votre Banc.",
				'de-de': "You may switch Seviper with 1 of your Benched Pokémon."
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Paralyze Poison",
				'fr-fr': "Poison paralysant",
				'de-de': "Paralyze Poison"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned. Flip a coin. If heads, the Defending Pokémon is now Paralyzed and Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné. Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé et Empoisonné.",
				'de-de': "The Defending Pokémon is now Poisoned. Flip a coin. If heads, the Defending Pokémon is now Paralyzed and Poisened."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 1,

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 89087,
				cardmarket: 278482
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278482,
				tcgplayer: 89087
			}
		}
	],

}

export default card
