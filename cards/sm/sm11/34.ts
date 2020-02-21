import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-34",
	localId: 34,

	// Card informations
	name: {
		en: "Salazzle",
		fr: "Malamandre",
	},

	hp: 100,

	type: [
		Type.FIRE,
	],

	dexId: 758,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/34/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/34/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/34/high",
		},
	},

	evolveFrom: {
		en: "Salandit",
		fr: "Tritox",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Fire Claws",
			fr: "Griffes Enflammées",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
