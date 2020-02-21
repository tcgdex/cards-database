import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-35",
	localId: 35,

	// Card informations
	name: {
		en: "Lapras",
		fr: "Lokhlass",
	},

	hp: 110,

	type: [
		Type.WATER,
	],

	dexId: 131,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/35/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/35/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/35/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/35/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 67,
		name: "Hitoshi Ariga"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Seafaring",
			fr: "Voyage en Mer",
		},
		text: {
			en: "Flip 3 coins. For each heads, attach a Water Energy card from your discard pile to your Benched Pokémon in any way you like.",
			fr: "Lancez 3 pièces. Pour chaque côté face, attachez une carte Énergie Water de votre pile de défausse à vos Pokémon de Banc, de la manière que vous voulez.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hydro Pump",
			fr: "Hydrocanon",
		},
		text: {
			en: "This attack does 20 more damage for each Water Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
