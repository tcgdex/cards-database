import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Dustox",
		'fr-fr': "Papinox",
		'es-es': "Dustox",
		'it-it': "Dustox",
		'pt-br': "Dustox",
		'de-de': "Pudox"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		269,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Cascoon",
		'fr-fr': "Blindalys",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Hazardous Scales",
				'fr-fr': "Écailles Fatales",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep, Burned, and Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi, Brûlé et Empoisonné.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Aerial Ace",
				'fr-fr': "Aéropique",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: 50,

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
		'en-us': "Toxic powder is scattered with each flap. At night, it is known to strip leaves off trees lining boulevards.",
	},

	thirdParty: {
		cardmarket: 280486,
		tcgplayer: 85059
	}
}

export default card
