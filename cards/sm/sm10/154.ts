import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-154",
	localId: 154,

	// Card informations
	name: {
		en: "Porygon",
		fr: "Porygon",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 137,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/154/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/154/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/154/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/154/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 6,
		name: "Ayaka Yoshida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Digicharge",
			fr: "Charge Numérique",
		},
		text: {
			en: "Flip 3 coins. For each heads, search your deck for an Energy card, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Lancez 3 pièces. Pour chaque côté face, cherchez une carte Énergie dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sharp Point",
			fr: "Point-Pointu",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
