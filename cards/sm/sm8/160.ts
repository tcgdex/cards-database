import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-160",
	localId: 160,

	// Card informations
	name: {
		en: "Ho-Oh",
		fr: "Ho-Oh",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 250,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/160/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/160/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/160/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/160/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 43,
		name: "Aya Kusube"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rainbow Burn",
			fr: "Brûlure Arc-en-Ciel",
		},
		text: {
			en: "This attack does 30 more damage for each type of basic Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque type d’Énergie de base attaché à ce Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
