import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-102",
	localId: 102,

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
			en: "https://assets.tcgdex.net/en/xy/xy8/102/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/102/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/102/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/102/high",
		},
	},

	evolveFrom: {
		en: "Flabébé",
		fr: "Flabébé",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



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

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
