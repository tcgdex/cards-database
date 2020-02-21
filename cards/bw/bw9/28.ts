import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-28",
	localId: 28,

	// Card informations
	name: {
		en: "Vanillish",
		fr: "Sorboul",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 583,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/28/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/28/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/28/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/28/high",
		},
	},

	evolveFrom: {
		en: "Vanillite",
		fr: "Sorbébé",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 25,
		name: "Kyoko Umemoto"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Surefire Spin",
			fr: "Tourbillon Glacé",
		},
		text: {
			en: "Flip 2 coins. If both of them are heads, this attack does 40 more damage.",
			fr: "Lancez 2 pièces. Si vous obtenez 2 côtés face, cette attaque inflige 40 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
