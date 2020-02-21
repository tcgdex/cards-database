import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-34",
	localId: 34,

	// Card informations
	name: {
		en: "Dusclops",
		fr: "Dusclops",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 356,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/34/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/34/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/34/high",
		},
	},

	evolveFrom: {
		en: "Duskull",
		fr: "Skélénox",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 22,
		name: "Yukiko Baba"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Dark One-eye",
			fr: "Borgne obscur",
		},
		text: {
			en: "You may discard a card from your hand. If you do, your opponent discards a card from his or her hand.",
			fr: "Vous pouvez défausser une carte de votre main. Votre adversaire défausse alors une carte de sa main.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ambush",
			fr: "Embuscade",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 40 damage plus 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "+20"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
