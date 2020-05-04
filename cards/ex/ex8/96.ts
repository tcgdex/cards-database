import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-96",
	localId: 96,

	// Card informations
	name: {
		en: "Crobat ex",
	},

	hp: 130,

	type: [
		Type.GRASS,
	],

	dexId: 169,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/96/high",
		},
	},

	evolveFrom: {
		en: "Golbat",
	},

	tags: [
		Tag.EX,
	],

	illustrator: "Ryo Ueda",

	abilities: [{
		id: 801,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Distortion",
		},
		text: {
			en: "Once during your turn (before your attack), if Crobat ex is your Active Pokémon, you may put 1 damage counter on 1 of your opponent's Pokémon. This power can't be used if Crobat ex is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cross Attack",
		},
		text: {
			en: "Flip 4 coins. This attack does 20 damage times the number of heads. If you get 2 or more heads, the Defending Pokémon is now Confused.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Pester",
		},
		text: {
			en: "If the Defending Pokémon is affected by a Special Condition, this attack does 60 damage plus 40 more damage.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
