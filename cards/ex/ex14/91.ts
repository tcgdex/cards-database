import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-91",
	localId: 91,

	// Card informations
	name: {
		en: "Delcatty ex",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 301,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/91/high",
		},
	},

	evolveFrom: {
		en: "Skitty",
	},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 17,
		name: "Shizurow"
	},

	abilities: [{
		id: 6,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Constrain",
		},
		text: {
			en: "Once during your turn (before your attack), you may use this power. Each player discards cards until that player has 6 cards in his or her hand. (You discard first.) This power can't be used if Delcatty ex is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Upstream",
		},
		text: {
			en: "Search your discard pile for all Energy cards. This attack does 10 damage times the number of Energy cards you find there. Show them to your opponent, and put them on top of your deck. Shuffle your deck afterward.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tail Slap",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card
