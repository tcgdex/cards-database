import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-16",
	localId: 16,

	// Card informations
	name: {
		en: "Rayquaza δ",
	},

	hp: 80,

	type: [
		Type.WATER,
		Type.METAL,
	],

	dexId: 384,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/16/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 531,
		type: AbilityType.POKEBODY,
		name: {
			en: "Hydro Barrier",
		},
		text: {
			en: "As long as Rayquaza has any Holon Energy cards attached to it, each of your Water Pokémon has no Weakness.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Delta Search",
		},
		text: {
			en: "Search your deck for a Holon Energy card and attach it to Rayquaza. Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.WATER,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ozone Flare",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-30"
	},{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card
