import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex9-40",
	localId: 40,

	// Card informations
	name: {
		en: "Swalot",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 317,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex9/40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex9/40/high",
		},
	},

	evolveFrom: {
		en: "Gulpin",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Blot",
		},
		text: {
			en: "Remove 1 damage counter from Swalot.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Poison Breath",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Emerald",
		code: "ex9"
	}
}

export default card
