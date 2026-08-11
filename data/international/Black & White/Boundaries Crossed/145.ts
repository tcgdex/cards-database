import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Black Kyurem-EX",
		'fr-fr': "Kyurem Noir-EX",
		'es-es': "Kyurem Negro-EX",
		'it-it': "Kyurem Nero-EX",
		'pt-br': "Kyurem Preto-EX",
		'de-de': "Schwarzes Kyurem-EX"
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
		"Dragon",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Fang",
				'fr-fr': "Croc de Dragon",
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 60,

		},
		{
			cost: [
				"Water",
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Freeze Shock",
				'fr-fr': "Éclair Gelé",
			},
			effect: {
				'en-us': "This Pokémon can't attack during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
