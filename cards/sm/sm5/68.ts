import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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

	illustrator: "Yumi",



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

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
