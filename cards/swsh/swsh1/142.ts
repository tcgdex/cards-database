import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-142",
	localId: 142,

	// Card informations
	name: {
		en: "Snorlax VMAX",
		fr: "Ronflex VMAX",
	},

	hp: 340,

	type: [
		Type.COLORLESS,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/142/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/142/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/142/high.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/142/high.png",
		},
	},

	evolveFrom: {
		en: "Snorlax V",
		fr: "Ronflex-V",
	},

	tags: [
		Tag.VMAX,
	],

	illustrator: {
		id: 61,
		name: "aky CG Works"
	},



	attacks: [{
		name: {
			en: "VMAX rule",
			fr: "Règle VMAX",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "G-Max Fall",
			fr: "Chute G-Max",
		},
		text: {
			en: "This attack does 30 more damage for each of your Benched Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chacun de vos Pokémon de Banc.",
		},
		damage: "60+"
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareVMAX,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
