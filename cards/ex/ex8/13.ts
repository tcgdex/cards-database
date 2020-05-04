import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-13",
	localId: 13,

	// Card informations
	name: {
		en: "Ninjask",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 291,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/13/high",
		},
	},

	evolveFrom: {
		en: "Nincada",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Katsura Tabata",

	abilities: [{
		id: 935,
		type: AbilityType.POKEBODY,
		name: {
			en: "Fast Protection",
		},
		text: {
			en: "Prevent all effects, including damage, done to Ninjask by your opponent's attacks from his or her Basic Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Swords Dance",
		},
		text: {
			en: "During your next turn, Ninjask's Slash attack's base damage is 80.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Slash",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
