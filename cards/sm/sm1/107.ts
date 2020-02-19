import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-107",
	localId: 107,

	// Card informations
	name: {
		en: "Trumbeak",
		fr: "Piclairon",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 732,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/107/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/107/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/107/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/107/high.png",
		},
	},

	evolveFrom: {
		en: "Pikipek",
		fr: "Picassaut",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Bullet Seed",
			fr: "Balle Graine",
		},
		text: {
			en: "Flip 4 coins. This attack does 20 damage for each heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card

