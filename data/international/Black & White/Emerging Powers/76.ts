import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Klinklang",
		'fr-fr': "Cliticlic",
		'es-es': "Klinklang",
		'it-it': "Klinklang",
		'pt-br': "Klinklang",
		'de-de': "Klikdiklak"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		601,
	],

	hp: 150,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Klang",
		'fr-fr': "Clic",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Charge Beam",
				'fr-fr': "Rayon Chargé",
			},
			effect: {
				'en-us': "Attach an Energy card from your discard pile to this Pokémon.",
				'fr-fr': "Attachez une carte Énergie de votre pile de défausse à ce Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Zap Cannon",
				'fr-fr': "Élecanon",
			},
			effect: {
				'en-us': "Flip a coin. If tails, this Pokémon can't use Zap Cannon during your next turn.",
				'fr-fr': "Lancez une pièce. Si c'est pile, ce Pokémon ne peut pas utiliser Élecanon pendant votre prochain tour.",
			},
			damage: 80,

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

	retreat: 4,

	description: {
		'en-us': "The gear with the red core is rotated at high speed for a rapid energy charge.",
	},

	thirdParty: {
		cardmarket: 280041,
		tcgplayer: 86486
	}
}

export default card
