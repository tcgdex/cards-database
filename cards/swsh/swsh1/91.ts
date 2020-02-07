import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-91",
	localId: 91,

	// Card informations
	name: {
		en: "Indeedee V",
	},

	hp: 180,

	type: [
		Type.PSYCHIC,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/91/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/91/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.V,
	],



	abilities: [{
		id: -1,
		type: AbilityType.TALENT,
		name: {
			en: "Watch Over",
		},
		text: {
			en: "Once during your turn, you may heal 20 damage from your Active Pokémon.",
		}
	}],

	attacks: [{
		name: {
			en: "V rule",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psychic",
		},
		text: {
			en: "This attack does 60 more damage for each Energy attached to your opponent’s Active Pokémon.",
		},
		damage: "10+"
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],

	retreat: 2,

	rarity: Rarity.RareV,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

