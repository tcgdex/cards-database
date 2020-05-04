import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-48",
	localId: 48,

	// Card informations
	name: {
		en: "Furret",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 162,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/48/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/48/high",
		},
	},

	evolveFrom: {
		en: "Sentret",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Atsuko Nishida",

	abilities: [{
		id: 1023,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Scavenger Hunt",
		},
		text: {
			en: "Once during your turn (before your attack), you may put 2 cards from your hand into your deck. Then search your deck for an Energy card, show it to your opponent, and put it in your hand. Shuffle your deck afterward. This power can't be used if Furret is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Spinning Attack",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
