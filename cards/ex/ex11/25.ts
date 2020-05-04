import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-25",
	localId: 25,

	// Card informations
	name: {
		en: "Porygon2",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 233,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/25/high",
		},
	},

	evolveFrom: {
		en: "Porygon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hisao Nakamura",

	abilities: [{
		id: 845,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Backup",
		},
		text: {
			en: "Once during your turn (before your attack), if you have less than 6 cards in your hand, you may draw cards until you have 6 cards in your hand. This power can't be used if Porygon2 is affected by a Special Condition.",
		}
	}],

	attacks: [{
		name: {
			en: "Machine Burst",
		},
		text: {
			en: "If Porygon2 has a Technical Machine card attached to it, the Defending Pokémon is now Asleep and Burned.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
