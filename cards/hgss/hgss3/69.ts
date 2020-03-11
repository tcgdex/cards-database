import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-69",
	localId: 69,

	// Card informations
	name: {
		en: "Stunky",
		fr: "Moufouette",
	},

	hp: 60,

	type: [
		Type.DARKNESS,
	],

	dexId: 434,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/69/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/69/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/69/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/69/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoyo Kimura",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Double Scratch",
			fr: "Double écorchure",
		},
		text: {
			en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
