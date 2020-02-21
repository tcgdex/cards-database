import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-68",
	localId: 68,

	// Card informations
	name: {
		en: "Hippopotas",
		fr: "Hippopotas",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 449,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/68/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/68/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/68/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/68/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 58,
		name: "Yumi"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Eleventh Hour Tackle",
			fr: "Tacle Désespéré",
		},
		text: {
			en: "If there are 3 or fewer cards in your deck, this attack does 130 more damage.",
			fr: "S’il y a 3 cartes ou moins dans votre deck, cette attaque inflige 130 dégâts supplémentaires.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
