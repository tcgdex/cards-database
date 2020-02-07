import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-147",
	localId: 147,

	// Card informations
	name: {
		en: "Cinccino",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/147/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/147/high.png",
		},
	},

	evolveFrom: {
		en: "Minccino",
	},

	tags: [
		Tag.STAGE1,
	],



	abilities: [{
		id: -1,
		type: AbilityType.TALENT,
		name: {
			en: "Make Do",
		},
		text: {
			en: "You must discard a card from your hand in order to use this Ability. Once during your turn, you may draw 2 cards.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Energy Assist",
		},
		text: {
			en: "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

