import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Claydol",
		'fr-fr': "Kaorine",
		'es-es': "Claydol",
		'it-it': "Claydol",
		'pt-br': "Claydol",
		'de-de': "Lepumentas"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		344,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Baltoy",
		'fr-fr': "Balbuto",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rapid Spin",
				'fr-fr': "Tour Rapide",
			},
			effect: {
				'en-us': "Switch this Pokémon with 1 of your Benched Pokémon. Then, your opponent switches the Defending Pokémon with 1 of his or her Benched Pok��mon.",
				'fr-fr': "Échangez ce Pokémon avec 1 de vos Pokémon de Banc. Ensuite, votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rock Smash",
				'fr-fr': "Éclate-Roc",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "An ancient clay figurine that came to life as a Pokémon from exposure to a mysterious ray of light.",
	},

	thirdParty: {
		cardmarket: 280503,
		tcgplayer: 84339
	}
}

export default card
