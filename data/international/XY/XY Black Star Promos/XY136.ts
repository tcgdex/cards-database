import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Noctowl BREAK",
		'fr-fr': "Noarfang TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		164,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Noctowl",
		'fr-fr': "Noarfang"
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Night Scan",
				'fr-fr': "Observation Nocturne"
			},
			effect: {
				'en-us': "Your opponent reveals his or her hand. This attack does 30 more damage for each Trainer card you find there.",
				'fr-fr': "Votre adversaire montre sa main. Cette attaque inflige 30 dégâts supplémentaires pour chaque carte Dresseur que vous y trouvez."
			},
			damage: 60,

		},
	],

	thirdParty: {
		cardmarket: 289825
	}
}

export default card
