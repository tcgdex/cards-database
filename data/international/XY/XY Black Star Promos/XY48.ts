import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Meowstic",
		'fr-fr': "Mistigrix",
	},

	illustrator: "kirisAki",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		678,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Espurr",
		'fr-fr': "Psystigri",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Mysterious Ears",
				'fr-fr': "Oreilles Mystérieuses",
			},
			effect: {
				'en-us': "If this Pokémon is your Active Pokémon and is damaged by an opponent's attack (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Confused.",
				'fr-fr': "Si ce Pokémon est votre Pokémon Actif et qu'il subit les dégâts d'une attaque de votre adversaire (même si ce Pokémon est mis K.O.), le Pokémon Attaquant est maintenant Confus.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Psyblast",
				'fr-fr': "Explopsy",
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When in danger, it raises its ears and releases enough psychic power to grind a 10-ton truck into dust.",
	},

	thirdParty: {
		cardmarket: 289711
	}
}

export default card
