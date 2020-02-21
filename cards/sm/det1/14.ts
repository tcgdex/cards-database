import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "det1-14",
	localId: 14,

	// Card informations
	name: {
		en: "Jigglypuff",
		fr: "Rondoudou",
	},

	hp: 60,

	type: [
		Type.FAIRY,
	],

	dexId: 39,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/det1/14/low",
			fr: "https://assets.tcgdex.net/fr/sm/det1/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/det1/14/high",
			fr: "https://assets.tcgdex.net/fr/sm/det1/14/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],





	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Healing Melody",
			fr: "Mélodie Apaisante",
		},
		text: {
			en: "Heal 10 damage from each of your Pokémon.",
			fr: "Soignez 10 dégâts à chacun de vos Pokémon.",
		},
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Detective Pikachu",
		code: "det1"
	}
}

export default card
