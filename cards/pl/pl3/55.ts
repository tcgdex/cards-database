import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-55",
	localId: 55,

	// Card informations
	name: {
		en: "Cherrim",
		fr: "Ceriflor",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 421,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/55/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/55/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/55/high",
		},
	},

	evolveFrom: {
		en: "Cherubi",
		fr: "Ceribou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Saya Tsuruta",



	attacks: [{
		name: {
			en: "Ram",
			fr: "Collision",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Petal Dance",
			fr: "Danse-fleur",
		},
		text: {
			en: "Flip 3 coins. This attack does 30 damage times the number of heads. Cherrim is now Confused.",
			fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces. Ceriflor est maintenant Confus.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
