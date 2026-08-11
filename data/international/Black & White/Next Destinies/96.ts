import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Kyurem-EX",
		'fr-fr': "Kyurem-EX",
		'es-es': "Kyurem-EX",
		'it-it': "Kyurem-EX",
		'pt-br': "Kyurem-EX",
		'de-de': "Kyurem-EX"
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		646,
	],
	hp: 180,
	types: [
		"Water",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Frozen Wings",
				'fr-fr': "Ailes Gelées",
			},
			effect: {
				'en-us': "Discard a Special Energy attached to the Defending Pokémon.",
				'fr-fr': "Défaussez une Énergie spéciale attachée au Pokémon Défenseur.",
			},
			damage: 60,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hail Blizzard",
				'fr-fr': "Tempêtegrêle",
			},
			effect: {
				'en-us': "This Pokémon can't use Hail Blizzard during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas utiliser Tempêtegrêle pendant votre prochain tour.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
