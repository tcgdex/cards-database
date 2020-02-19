import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-120",
	localId: 120,

	// Card informations
	name: {
		en: "Archen",
		fr: "Arkéapti",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 566,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/120/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/120/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/120/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/120/high.png",
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
		id: 112,
		name: "0313"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Endeavor",
			fr: "Effort",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

