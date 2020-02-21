import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-8",
	localId: 8,

	// Card informations
	name: {
		en: "Gyarados δ",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
		Type.METAL,
	],

	dexId: 130,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/8/high",
		},
	},

	evolveFrom: {
		en: "Magikarp",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},

	abilities: [{
		id: 333,
		type: AbilityType.POKEBODY,
		name: {
			en: "Delta Reactor",
		},
		text: {
			en: "As long as any Stadium card with Holon in its name is in play, each of your Pokémon that has δ on its card does 10 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Hyper Beam",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heavy Impact",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card
