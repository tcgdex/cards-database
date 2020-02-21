import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-73",
	localId: 73,

	// Card informations
	name: {
		en: "Sliggoo",
		fr: "Colimucus",
	},

	hp: 80,

	type: [
		Type.DRAGON,
	],

	dexId: 705,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/73/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/73/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/73/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/73/high",
		},
	},

	evolveFrom: {
		en: "Goomy",
		fr: "Mucuscule",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Gooey",
			fr: "Poisseux",
		},
		text: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts à ce Pokémon.",
		},
	},{
		cost: [
			Type.WATER,
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Gentle Slap",
			fr: "Gifle Douce",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
