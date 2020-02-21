import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-41",
	localId: 41,

	// Card informations
	name: {
		en: "Clefable",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 36,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/41/high",
		},
	},

	evolveFrom: {
		en: "Clefairy",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 281,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Moonlight",
		},
		text: {
			en: "Once during your turn (before you attack), you may put a card from your hand back on your deck. If you do so, search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can't be used if Clefable is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Doubleslap",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card
