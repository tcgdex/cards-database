import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-9",
	localId: 9,

	// Card informations
	name: {
		en: "Dark Slowking",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
		Type.DARKNESS,
	],

	dexId: 199,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/9/high",
		},
	},

	evolveFrom: {
		en: "Slowpoke",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 611,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Cunning",
		},
		text: {
			en: "Once during your turn (before your attack), you may look at the top card of your opponent's deck. Then, you may shuffle his or her deck. This power can't be used if Dark Slowking is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Litter",
		},
		text: {
			en: "You may discard a combination of up to 2 Pokémon Tool cards and Rocket's Secret Machine cards from your hand, and then do 20 damage plus 30 more damage for each card you discarded.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
