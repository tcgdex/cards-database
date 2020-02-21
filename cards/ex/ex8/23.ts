import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-23",
	localId: 23,

	// Card informations
	name: {
		en: "Sableye",
	},

	hp: 60,

	type: [
		Type.DARKNESS,
	],

	dexId: 302,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/23/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 43,
		name: "Aya Kusube"
	},

	abilities: [{
		id: 721,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Night Vision",
		},
		text: {
			en: "Once during your turn (before your attack), if Sableye is your Active Pokémon, you may look at your opponent's hand. This power can't be used if Sableye is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Slash",
		},
		damage: 10
	},{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Limitation",
		},
		text: {
			en: "Your opponent can't play any Supporter cards from his or her hand during your opponent's next turn.",
		},
	}],



	resistances: [{
		type: Type.COLORLESS,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
