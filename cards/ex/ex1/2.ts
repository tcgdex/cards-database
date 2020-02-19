import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex1-2",
	localId: 2,

	// Card informations
	name: {
		en: "Beautifly",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 267,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex1/2/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex1/2/high.png",
		},
	},

	evolveFrom: {
		en: "Silcoon",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},

	abilities: [{
		id: 783,
		type: AbilityType.POKEBODY,
		name: {
			en: "Withering Dust",
		},
		text: {
			en: "As long as Beautifly is in play, do not apply Resistance for all Active Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Stun Spore",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Parallel Gain",
		},
		text: {
			en: "Remove 1 damage counter from each of your Pokémon, including Beautifly.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Ruby & Sapphire",
		code: "ex1"
	}
}

export default card

