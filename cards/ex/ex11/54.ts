import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-54",
	localId: 54,

	// Card informations
	name: {
		en: "Shelgon δ",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 372,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/54/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/54/high",
		},
	},

	evolveFrom: {
		en: "Bagon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 276,
		type: AbilityType.POKEBODY,
		name: {
			en: "Exoskeleton",
		},
		text: {
			en: "Any damage done to Shelgon by attacks is reduced by 10 (after applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		name: {
			en: "Heat Blast",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	},{
		type: Type.FIRE,
		value: "-30"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
