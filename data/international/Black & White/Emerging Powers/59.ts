import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Sawk",
		'fr-fr': "Karaclée",
		'es-es': "Sawk",
		'it-it': "Sawk",
		'pt-br': "Sawk",
		'de-de': "Karadonis"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		539,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Five Fierce Chops",
				'fr-fr': "Volée de Coups",
			},
			effect: {
				'en-us': "Flip 5 coins. This attack does 20 damage times the number of heads. This Pokémon can't attack during your next turn.",
				'fr-fr': "Lancez 5 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face. Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
			},
			damage: 20,

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
		'en-us': "Tying their belts gets them pumped and makes their punches more destructive. Disturbing their training angers them.",
	},

	thirdParty: {
		cardmarket: 280024,
		tcgplayer: 88938
	}
}

export default card
