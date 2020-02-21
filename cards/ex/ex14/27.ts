import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-27",
	localId: 27,

	// Card informations
	name: {
		en: "Swampert",
	},

	hp: 120,

	type: [
		Type.FIGHTING,
	],

	dexId: 260,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/27/high",
		},
	},

	evolveFrom: {
		en: "Marshtomp",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 55,
		name: "Hisao Nakamura"
	},

	abilities: [{
		id: 734,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Echo Draw",
		},
		text: {
			en: "Once during your turn (before your attack), you may draw a card. This power can't be used if Swampert is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rock Hurl",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card
