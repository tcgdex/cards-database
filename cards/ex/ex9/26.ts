import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex9-26",
	localId: 26,

	// Card informations
	name: {
		en: "Dodrio",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 85,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex9/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex9/26/high",
		},
	},

	evolveFrom: {
		en: "Doduo",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Smash Kick",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Smash Turn",
		},
		text: {
			en: "After your attack, you may switch Dodrio with 1 of your Benched Pokémon.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Emerald",
		code: "ex9"
	}
}

export default card
