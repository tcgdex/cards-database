import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Machoke",
		'fr-fr': "Machopeur",
		'de-de': "Maschock"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [67],

	hp: 80,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Machop",
		'fr-fr': "Machoc"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Strikes Back",
				'fr-fr': "Contre-attaque",
				'de-de': "Strikes Back"
			},
			effect: {
				'en-us': "If Machoke is your Active Pokémon and is damaged by an opponent's attack (even if Machoke is Knocked Out), put 1 damage counter on the Attacking Pokémon.",
				'fr-fr': "Si Machopeur est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Machopeur est mis K.O), placez 1 marqueur de dégât sur le Pokémon Attaquant.",
				'de-de': "If Machoke is your Active Pokémon and is damaged by an opponent's attack (even if Machoke is Knocked Out), put 1 damage counter on the Attacking Pokémon."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Low Kick",
				'fr-fr': "Balayage",
				'de-de': "Low Kick"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86978,
				cardmarket: 276115
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86978,
				cardmarket: 276115
			}
		},
		{
			type: "normal",
			stamp: ['state-championships'],
			thirdParty: {
				tcgplayer: 251242,
				cardmarket: 449908
			}
		},
	]
}

export default card
