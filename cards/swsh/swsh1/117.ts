import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-117",
	localId: 117,

	// Card informations
	name: {
		en: "Galarian Zigzagoon",
	},

	hp: 70,

	type: [
		Type.DARKNESS,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/117/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/117/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],



	abilities: [{
		id: -1,
		type: AbilityType.TALENT,
		name: {
			en: "Headbutt Tantrum",
		},
		text: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may put 1 damage counter on 1 of your opponent’s Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Surprise Attack",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

