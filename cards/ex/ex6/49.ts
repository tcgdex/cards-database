import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex6-49",
	localId: 49,

	// Card informations
	name: {
		en: "Venomoth",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 49,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex6/49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex6/49/high",
		},
	},

	evolveFrom: {
		en: "Venonat",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kagemaru Himeno",

	abilities: [{
		id: 225,
		type: AbilityType.POKEBODY,
		name: {
			en: "Protective Dust",
		},
		text: {
			en: "Prevent all effects of attacks, except damage, done to Venomoth by the Attacking Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Sleep Poison",
		},
		text: {
			en: "The Defending Pokémon is now Asleep and Poisoned.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Razor Wind",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "FireRed & LeafGreen",
		code: "ex6"
	}
}

export default card
