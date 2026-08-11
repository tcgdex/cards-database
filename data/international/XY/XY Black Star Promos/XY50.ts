import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Pangoro",
		'fr-fr': "Pandarbare",
	},

	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		675,
	],

	hp: 100,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Pancham",
		'fr-fr': "Pandespiègle",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Benevolent Boss",
				'fr-fr': "Boss Bienveillant",
			},
			effect: {
				'en-us': "If this Pokémon is your Active Pokémon, it gets +20 HP for each of your Benched Pokémon.",
				'fr-fr': "Si ce Pokémon est votre Pokémon Actif, il reçoit 20 PV pour chacun de vos Pokémon de Banc.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Crazy Knuckle",
				'fr-fr': "Poing Fou",
			},
			effect: {
				'en-us': "If this Pokémon is affected by a Special Condition, this attack does 40 more damage.",
				'fr-fr': "Si ce Pokémon est affecté par un État Spécial, cette attaque inflige 40 dégâts supplémentaires.",
			},
			damage: "80＋",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Although it possesses a violent temperament, it won't put up with bullying. It uses the leaf in its mouth to sense the movements of its enemies.",
	},

	thirdParty: {
		cardmarket: 289713
	}
}

export default card
