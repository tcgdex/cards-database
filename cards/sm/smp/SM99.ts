import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM99",
	localId: "SM99",

	// Card informations
	name: {
		en: "Mimikyu",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 778,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM99/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM99/high",
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
			Type.COLORLESS
		],
		name: {
			en: "Filch",
		},
		text: {
			en: "Draw 2 cards.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Copycat",
		},
		text: {
			en: "If your opponent's Pokémon used an attack that isn't a GX attack during their last turn, use it as this attack.",
		},
	}],







	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
