import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-55",
	localId: 55,

	// Card informations
	name: {
		en: "Toxicroak",
		fr: "Coatox",
	},

	hp: 110,

	type: [
		Type.PSYCHIC,
	],

	dexId: 454,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/55/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/55/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/55/high",
		},
	},

	evolveFrom: {
		en: "Croagunk",
		fr: "Cradopaud",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Poison Jab",
			fr: "Direct Toxik",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
		},
		damage: 30
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Poison Boost",
			fr: "Boost de Poison",
		},
		text: {
			en: "If this Pokémon is Poisoned, this attack does 80 more damage. Then, remove that Special Condition from this Pokémon.",
			fr: "Si ce Pokémon est Empoisonné, cette attaque inflige 80 dégâts supplémentaires. Ensuite, retirez cet État Spécial de ce Pokémon.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
