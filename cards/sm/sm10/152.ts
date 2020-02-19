import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-152",
	localId: 152,

	// Card informations
	name: {
		en: "Lickitung",
		fr: "Excelangue",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 108,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/152/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/152/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/152/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/152/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 22,
		name: "Yukiko Baba"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Lick",
			fr: "Léchouille",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card

