import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Tynamo",
		'fr-fr': "Anchwatt",
		'es-es': "Tynamo",
		'it-it': "Tynamo",
		'pt-br': "Tynamo",
		'de-de': "Zapplardin"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		602,
	],

	hp: 40,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
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
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "These Pokémon move in schools. They have an electricity-generating organ, so they discharge electricity if in danger.",
	},

	thirdParty: {
		cardmarket: 280372,
		tcgplayer: 90095
	}
}

export default card
