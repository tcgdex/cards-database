import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Jolteon",
		'fr-fr': "Voltali",
		'es-es': "Jolteon",
		'it-it': "Jolteon",
		'pt-br': "Jolteon",
		'de-de': "Blitza"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		135,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Electrigun",
				'fr-fr': "Pistolectrique"
			},
			effect: {
				'en-us': "You may discard a Lightning Energy attached to this Pokémon. If you do, this attack does 40 more damage.",
				'fr-fr': "Vous pouvez défausser une Énergie  attachée à ce Pokémon. Dans ce cas, cette attaque inflige 40 dégâts supplémentaires."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Pin Missile",
				'fr-fr': "Dard-Nuée"
			},
			effect: {
				'en-us': "Flip 4 coins. This attack does 40 damage times the number of heads.",
				'fr-fr': "Lancez 4 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		'en-us': "If agitated, it uses electricity to straighten out its fur and launch it in small bunches.",
	},

	thirdParty: {
		cardmarket: 280365,
		tcgplayer: 86347
	}
}

export default card
