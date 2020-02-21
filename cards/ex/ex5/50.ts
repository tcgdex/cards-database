import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-50",
	localId: 50,

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
			en: "https://assets.tcgdex.net/en/ex/ex5/50/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/50/high",
		},
	},

	evolveFrom: {
		en: "Gulpin",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Amnesia",
		},
		text: {
			en: "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Swallow Up",
		},
		text: {
			en: "Before doing damage, count the remaining HP of the Defending Pokémon and Swalot. If the Defending Pokémon has fewer remaining HP than Swalot's, this attack does 50 damage plus 30 more damage.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Hidden Legends",
		code: "ex5"
	}
}

export default card
