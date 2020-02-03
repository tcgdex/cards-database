import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-95",
	localId: 95,

	// Card informations
	name: {
		en: "Dragonair",
		fr: "Draco",
	},

	hp: 90,

	type: [
		Type.DRAGON,
	],

	dexId: 148,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/95/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/95/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/95/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/95/high.png",
		},
	},

	evolveFrom: {
		en: "Dratini",
		fr: "Minidraco",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 138,
		name: "hatachu"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Dragon's Wish",
			fr: "Souhait du Dragon",
		},
		text: {
			en: "During your next turn, you may attach any number of Energy cards from your hand to your Pokémon.",
			fr: "Pendant votre prochain tour, vous pouvez attacher autant de cartes Énergie que vous voulez de votre main à vos Pokémon.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Tail Smack",
			fr: "Coup de Queue",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card

