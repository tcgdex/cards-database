import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-61",
	localId: 61,

	// Card informations
	name: {
		en: "Roselia",
		fr: "Roselia",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 315,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/61/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/61/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/61/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Takashi Yamaguchi",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Petal Dance",
			fr: "Danse-fleur",
		},
		text: {
			en: "Flip 3 coins. This attack does 20 damage times the number of heads. Roselia is now Confused.",
			fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face. Roselia est maintenant Confus.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
