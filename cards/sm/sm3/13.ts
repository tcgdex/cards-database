import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-13",
	localId: 13,

	// Card informations
	name: {
		en: "Simisage",
		fr: "Feuiloutan",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 512,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/13/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/13/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/13/high",
		},
	},

	evolveFrom: {
		en: "Pansage",
		fr: "Feuillajou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 61,
		name: "tetsuya koizumi"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Scratch",
			fr: "Griffe",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Leaf Supply",
			fr: "Provision de Feuillage",
		},
		text: {
			en: "You may attach a Grass Energy card from your hand to 1 of your Pokémon.",
			fr: "Vous pouvez attacher une carte Énergie Grass de votre main à l’un de vos Pokémon.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
