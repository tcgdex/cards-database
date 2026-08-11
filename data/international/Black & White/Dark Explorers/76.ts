import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Klang",
		'fr-fr': "Clic",
		'es-es': "Klang",
		'it-it': "Klang",
		'pt-br': "Klang",
		'de-de': "Kliklak"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		600,
	],

	hp: 80,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Klink",
		'fr-fr': "Tic"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Charge Beam",
				'fr-fr': "Rayon Chargé"
			},
			effect: {
				'en-us': "Flip a coin. If heads, attach an Energy card from your discard pile to this Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, attachez une carte Énergie de votre pile de défausse à ce Pokémon."
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Vice Grip",
				'fr-fr': "Force Poigne"
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

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Spinning minigears are rotated at high speed and repeatedly fired away. It is dangerous if the gears don't return.",
	},

	thirdParty: {
		cardmarket: 280404,
		tcgplayer: 86476
	}
}

export default card
