import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY139",
	localId: "XY139",

	// Card informations
	name: {
		en: "Floette",
		fr: "Floette",
	},

	hp: 70,

	type: [
		Type.FAIRY,
	],

	dexId: 670,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY139/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY139/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY139/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY139/high",
		},
	},

	evolveFrom: {
		en: "Flabébé",
		fr: "Flabébé",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Aromatherapy",
			fr: "Aromathérapie",
		},
		text: {
			en: "Heal 30 damage from each of your Pokémon.",
			fr: "Soignez 30 dégâts à chacun de vos Pokémon.",
		},
	},{
		cost: [
			Type.FAIRY,
			Type.FAIRY
		],
		name: {
			en: "Magical Leaf",
			fr: "Feuille Magik",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage and heal 20 damage from this Pokémon.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts supplémentaires et vous soignez 20 dégâts à ce Pokémon.",
		},
		damage: 20
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

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
