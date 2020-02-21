import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-158",
	localId: 158,

	// Card informations
	name: {
		en: "Miltank",
		fr: "Écrémeuh",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 241,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/158/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/158/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/158/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/158/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Milk Cannon",
			fr: "Canon à Lait",
		},
		text: {
			en: "Reveal any number of Moomoo Milk cards in your hand. This attack does 60 damage for each card you revealed in this way.",
			fr: "Montrez autant de cartes Lait Meumeu que vous voulez de votre main. Cette attaque inflige 60 dégâts pour chaque carte montrée de cette façon.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
