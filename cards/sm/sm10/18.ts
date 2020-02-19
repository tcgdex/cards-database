import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-18",
	localId: 18,

	// Card informations
	name: {
		en: "Grubbin",
		fr: "Larvibule",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 736,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/18/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/18/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/18/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/18/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Electrical Signal",
			fr: "Signal Électrique",
		},
		text: {
			en: "Search your deck for up to 2 Lightning Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez jusqu’à 2 Pokémon Lightning dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Corkscrew Punch",
			fr: "Poing Tire-Bouchon",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
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

