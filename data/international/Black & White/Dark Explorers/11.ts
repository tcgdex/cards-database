import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Accelgor",
		'fr-fr': "Limaspeed",
		'es-es': "Accelgor",
		'it-it': "Accelgor",
		'pt-br': "Accelgor",
		'de-de': "Hydragil"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		617,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Shelmet",
		'fr-fr': "Escargaume"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Hammer In",
				'fr-fr': "Enfoncer"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Deck and Cover",
				'fr-fr': "Délit de Fuite"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Paralyzed and Poisoned. Shuffle this Pokémon and all cards attached to it into your deck.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Paralysé et Empoisonné. Mélangez ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		'en-us': "When its body dries out, it weakens. So, to prevent dehydration, it wraps itself in many layers of thin membrane.",
	},

	thirdParty: {
		cardmarket: 280339,
		tcgplayer: 83460
	}
}

export default card
