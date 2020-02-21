import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-66",
	localId: 66,

	// Card informations
	name: {
		en: "Hippopotas",
		fr: "Hippopotas",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 449,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/66/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/66/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/66/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 44,
		name: "Kent Kanetsuna"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Grainy Sand",
			fr: "Sable graineux",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double-edge",
			fr: "Damoclès",
		},
		text: {
			en: "Hippopotas does 10 damage to itself.",
			fr: "Hippopotas s'inflige 10 dégâts.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+10"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
