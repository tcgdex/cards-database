import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Plusle",
		'fr-fr': "Posipi",
		'es-es': "Plusle",
		'it-it': "Plusle",
		'pt-br': "Plusle",
		'de-de': "Plusle"
	},

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		311,
	],

	hp: 60,

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
				'en-us': "Tag Draw",
				'fr-fr': "Pioche Groupée"
			},
			effect: {
				'en-us': "Shuffle your hand into your deck. Then, draw 4 cards. If Minun is on your Bench, draw 4 more cards.",
				'fr-fr': "Mélangez votre main avec votre deck. Ensuite, piochez 4 cartes. Si Négapi est sur votre Banc, piochez 4 cartes supplémentaires."
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Positive Ion",
				'fr-fr': "Cation"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires."
			},
			damage: 20,

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
		'en-us': "It cheers on friends with pom-poms made of sparks. It drains power from telephone poles.",
	},

	thirdParty: {
		cardmarket: 280367,
		tcgplayer: 88173
	}
}

export default card
