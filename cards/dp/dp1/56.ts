import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-56",
	localId: 56,

	// Card informations
	name: {
		en: "Monferno",
		fr: "Chimpenfeu",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 391,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/56/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/56/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/56/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/56/high",
		},
	},

	evolveFrom: {
		en: "Chimchar",
		fr: "Ouisticram",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Flame Dance",
			fr: "Danse enflammée",
		},
		text: {
			en: "Search your discard pile for a Fire Energy card and attach it to Monferno.",
			fr: "Cherchez dans votre pile de défausse une carte Énergie Fire et attachez-la à Chimpenfeu.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fury Swipes",
			fr: "Combo-griffe",
		},
		text: {
			en: "Flip 3 coins. This attack does 20 damage times the number of heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+20"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
