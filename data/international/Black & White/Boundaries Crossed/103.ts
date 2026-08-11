import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "White Kyurem-EX",
		'fr-fr': "Kyurem Blanc EX",
		'es-es': "Kyurem Blanco-EX",
		'it-it': "Kyurem Bianco-EX",
		'pt-br': "Kyurem Branco-EX",
		'de-de': "Weißes Kyurem-EX"
	},
	illustrator: "Eske Yoshinob",
	rarity: "Rare",
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
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Stream",
				'fr-fr': "Flux Draconique",
			},
			effect: {
				'en-us': "Flip a coin. If heads, attach a basic Energy card from your discard pile to this Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, attachez une carte Énergie de base de votre pile de défausse à ce Pokémon.",
			},
			damage: 60,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Ice Burn",
				'fr-fr': "Feu Glacé",
			},
			effect: {
				'en-us': "Discard 2 Fire Energy attached to this Pokémon. The Defending Pokémon is now Burned.",
				'fr-fr': "Défaussez 2 Énergies Fire attachées à ce Pokémon. Le Pokémon Défenseur est maintenant Brûlé.",
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
