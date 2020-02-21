import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-50",
	localId: 50,

	// Card informations
	name: {
		en: "Golbat",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 42,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/50/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/50/high",
		},
	},

	evolveFrom: {
		en: "Zubat",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 97,
		name: "Kazuyuki Kano"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Pulse Search",
		},
		text: {
			en: "Look at your opponent's hand.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
