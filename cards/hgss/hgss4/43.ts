import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-43",
	localId: 43,

	// Card informations
	name: {
		en: "Magneton",
		fr: "Magneton",
	},

	hp: 80,

	type: [
		Type.LIGHTNING,
	],

	dexId: 82,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/43/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/43/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/43/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/43/high",
		},
	},

	evolveFrom: {
		en: "Magnemite",
		fr: "Magneti",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 63,
		name: "Noriko Hotta"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Speed Ball",
			fr: "Balle rapide",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tri Attack",
			fr: "Triplattaque",
		},
		text: {
			en: "Flip 3 coins. This attack does 20 damage times the number of heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
