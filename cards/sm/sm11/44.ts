import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-44",
	localId: 44,

	// Card informations
	name: {
		en: "Tirtouga",
		fr: "Carapagos",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 564,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/44/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/44/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/44/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/44/high.png",
		},
	},

	evolveFrom: {
		en: "Unidentified Fossil",
		fr: "Fossile Inconnu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 92,
		name: "HYOGONOSUKE"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Shell Attack",
			fr: "Coquill-Attaque",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Boulder Crush",
			fr: "Rocher Écrasant",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

