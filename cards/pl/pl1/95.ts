import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-95",
	localId: 95,

	// Card informations
	name: {
		en: "Slakoth",
		fr: "Parecool",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 287,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/95/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/95/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/95/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Flail",
			fr: "Fléau",
		},
		text: {
			en: "Does 10 damage times the number of damage counters on Slakoth.",
			fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégât sur Parecool.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slack Off",
			fr: "Paresse",
		},
		text: {
			en: "Remove all damage counters from Slakoth. Slakoth can't attack during your next turn.",
			fr: "Retirez à Parecool tous ses marqueurs de dégât. Parecool ne peut pas attaquer lors de votre prochain tour.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
