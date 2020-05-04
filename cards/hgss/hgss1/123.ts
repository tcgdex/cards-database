import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-123",
	localId: 123,

	// Card informations
	name: {
		en: "Gyarados",
		fr: "Léviator",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 130,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/123/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/123/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/123/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/123/high",
		},
	},

	evolveFrom: {
		en: "Magikarp",
		fr: "Magicarpe",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Wataru Kawahara",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Thrash",
			fr: "Mania",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 damage plus 20 more damage. If tails, Gyarados does 20 damage to itself.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires. Si c’est pile, Léviator s’inflige 20 dégâts.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heavy Storm",
			fr: "Grosse tempête",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
