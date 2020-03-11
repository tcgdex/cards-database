import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-56",
	localId: 56,

	// Card informations
	name: {
		en: "Volbeat",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 313,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/56/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/56/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Midori Harada",

	abilities: [{
		id: 955,
		type: AbilityType.POKEBODY,
		name: {
			en: "Extra Protection",
		},
		text: {
			en: "As long as you have Illumise in play, prevent all effects, including damage, done to Volbeat by attacks from your opponent's Pokémon-ex.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Swift",
		},
		text: {
			en: "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
