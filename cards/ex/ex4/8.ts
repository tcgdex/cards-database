import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-8",
	localId: 8,

	// Card informations
	name: {
		en: "Team Magma's Claydol",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
		Type.DARKNESS,
	],

	dexId: 344,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/8/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/8/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 156,
		name: "Zu-Ka"
	},

	abilities: [{
		id: 765,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Magma Switch",
		},
		text: {
			en: "Once during your turn (before your attack), you may move an Energy card attached to your Pokémon with Team Magma in its name to another of your Pokémon. This power can't be used if Team Magma's Claydol is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dark Hand",
		},
		text: {
			en: "If you have more cards in your hand than your opponent, this attack does 40 damage plus 20 more damage.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Team Magma vs Team Aqua",
		code: "ex4"
	}
}

export default card

