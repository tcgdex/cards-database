import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-17",
	localId: 17,

	// Card informations
	name: {
		en: "Seadra",
		fr: "Hypocéan",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 117,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/17/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/17/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/17/high",
		},
	},

	evolveFrom: {
		en: "Horsea",
		fr: "Hypotrempe",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 58,
		name: "Yumi"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Hydro Pump",
			fr: "Hydrocanon",
		},
		text: {
			en: "This attack does 20 more damage times the amount of Water Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies Water attachées à ce Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card
