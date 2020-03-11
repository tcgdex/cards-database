import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex16-27",
	localId: 27,

	// Card informations
	name: {
		en: "Cacturne",
	},

	hp: 70,

	type: [
		Type.DARKNESS,
	],

	dexId: 332,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex16/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex16/27/high",
		},
	},

	evolveFrom: {
		en: "Cacnea",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",

	abilities: [{
		id: 980,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Poison Structure",
		},
		text: {
			en: "Once during your turn (before your attack), if Sidney's Stadium is in play, you may choose 1 of the Defending Pokémon. That Pokémon is now Poisoned. This power can't be used if Cacturne is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pin Missile",
		},
		text: {
			en: "Flip 4 coins. This attack does 20 damage times the number of heads.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Power Keepers",
		code: "ex16"
	}
}

export default card
