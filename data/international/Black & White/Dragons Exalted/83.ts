import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Durant",
		'fr-fr': "Fermite",
		'es-es': "Durant",
		'it-it': "Durant",
		'pt-br': "Durant",
		'de-de': "Fermicula"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		632,
	],

	hp: 70,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Pull Out",
				'fr-fr': "Déracinement",
			},
			effect: {
				'en-us': "Put a card from your discard pile on top of your deck.",
				'fr-fr': "Mettez une carte de votre pile de défausse sur le dessus de votre deck.",
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Iron Head",
				'fr-fr': "Tête de Fer",
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 30,

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

	retreat: 1,

	description: {
		'en-us': "Durant dig nests in mountains. They build their complicated, interconnected tunnels into mazes.",
	},

	thirdParty: {
		cardmarket: 280522,
		tcgplayer: 85021
	}
}

export default card
