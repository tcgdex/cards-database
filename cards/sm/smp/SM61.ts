import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM61",
	localId: "SM61",

	// Card informations
	name: {
		en: "Tapu Bulu",
		fr: "Tokotoro",
	},

	hp: 130,

	type: [
		Type.GRASS,
	],

	dexId: 786,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM61/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM61/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM61/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM61/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 64,
		name: "Megumi Mizutani"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Horn Leech",
			fr: "Encornebois",
		},
		text: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts à ce Pokémon.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Calm Strike",
			fr: "Frappe Placide",
		},
		text: {
			en: "If you used your GX attack, this attack does 60 more damage.",
			fr: "Si vous avez utilisé votre attaque GX, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card

