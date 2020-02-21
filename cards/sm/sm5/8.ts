import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-8",
	localId: 8,

	// Card informations
	name: {
		en: "Grotle",
		fr: "Boskara",
	},

	hp: 110,

	type: [
		Type.GRASS,
	],

	dexId: 388,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/8/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/8/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/8/high",
		},
	},

	evolveFrom: {
		en: "Turtwig",
		fr: "Tortipouss",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 49,
		name: "Shigenori Negishi"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Mega Drain",
			fr: "Méga-Sangsue",
		},
		text: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts à ce Pokémon.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Razor Leaf",
			fr: "Tranch’Herbe",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
