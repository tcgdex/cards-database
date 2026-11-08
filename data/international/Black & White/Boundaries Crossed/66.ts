import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Toxicroak",
		'fr-fr': "Coatox",
		'es-es': "Toxicroak",
		'it-it': "Toxicroak",
		'pt-br': "Toxicroak",
		'de-de': "Toxiquak"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		454,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Croagunk",
		'fr-fr': "Cradopaud",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Revenge",
				'fr-fr': "Vendetta",
			},
			effect: {
				'en-us': "If any of your Pokémon were Knocked Out by damage from an opponent's attack during his or her last turn, this attack does 70 more damage.",
				'fr-fr': "Si l'un de vos Pokémon a été mis K.O. par les dégâts d'une attaque de votre adversaire pendant son dernier tour, cette attaque inflige 70 dégâts supplémentaires.",
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
				'en-us': "Poison Jab",
				'fr-fr': "Direct Toxik",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
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
		'en-us': "The croaking that Toxicroak produces before a battle is for churning the poison it has stored in its poison sac.",
	},

	thirdParty: {
		cardmarket: 280653,
		tcgplayer: 90010
	}
}

export default card
