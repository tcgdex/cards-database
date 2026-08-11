import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "White Kyurem",
		'fr-fr': "Kyurem Blanc",
		'es-es': "Kyurem Blanco",
		'it-it': "Kyurem Bianco",
		'pt-br': "Kyurem Branco",
		'de-de': "Weißes Kyurem"
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
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Damage Rush",
				'fr-fr': "Charge Destructrice",
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Cold Fire",
				'fr-fr': "Flammes de Glace",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 40 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires.",
			},
			damage: 80,

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
		cardmarket: 280689,
		tcgplayer: 90586
	}
}

export default card
