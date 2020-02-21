import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-25",
	localId: 25,

	// Card informations
	name: {
		en: "Sealeo",
		fr: "Phogleur",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 364,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/25/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/25/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/25/high",
		},
	},

	evolveFrom: {
		en: "Spheal",
		fr: "Obalie",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rest",
			fr: "Repos",
		},
		text: {
			en: "Heal 60 damage from this Pokémon. This Pokémon is now Asleep.",
			fr: "Soignez 60 dégâts à ce Pokémon. Ce Pokémon est maintenant Endormi.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Ice Ball",
			fr: "Ball'Glace",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.METAL,
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
