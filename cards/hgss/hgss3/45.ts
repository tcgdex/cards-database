import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-45",
	localId: 45,

	// Card informations
	name: {
		en: "Doduo",
		fr: "Doduo",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 84,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/45/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/45/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/45/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/45/high",
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
			Type.COLORLESS
		],
		name: {
			en: "Peck",
			fr: "Picpic",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double Headstrike",
			fr: "Double coup d'tête",
		},
		text: {
			en: "Flip 2 coins. If either of them is tails, this attack does nothing.",
			fr: "Lancez 2 pièces. Si vous obtenez un côté pile, cette attaque ne fait rien.",
		},
		damage: 50
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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
