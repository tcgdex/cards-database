import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-15",
	localId: 15,

	// Card informations
	name: {
		en: "Cacturne δ",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 332,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/15/high",
		},
	},

	evolveFrom: {
		en: "Cacnea",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 946,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Spike Storm",
		},
		text: {
			en: "Once during your turn (before your attack), if Cacturne is your Active Pokémon, you may put 1 damage counter on 1 of your opponent's Pokémon that already has any damage counters on it. This power can't be used if Cacturne is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Triple Needle",
		},
		text: {
			en: "Choose 3 of your opponent's Pokémon. This attack does 10 damage to each of those Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Light Punch",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card
