import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Black Kyurem",
		'fr-fr': "Kyurem Noir",
		'es-es': "Kyurem Negro",
		'it-it': "Kyurem Nero",
		'pt-br': "Kyurem Preto",
		'de-de': "Schwarzes Kyurem"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		646,
	],

	hp: 130,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Dual Claw",
				'fr-fr': "Paire de Griffes",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flash Freeze",
				'fr-fr': "Tonnerre de Glace",
			},
			effect: {
				'en-us': "Discard an Energy attached to this Pokémon.",
				'fr-fr': "Défaussez une Énergie attachée à ce Pokémon.",
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "This legendary ice Pokémon waits for a hero to fill in the missing parts of its body with truth or ideals.",
	},

	thirdParty: {
		cardmarket: 280687,
		tcgplayer: 83851
	}
}

export default card
