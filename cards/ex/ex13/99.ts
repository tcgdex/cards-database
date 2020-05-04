import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-99",
	localId: 99,

	// Card informations
	name: {
		en: "Crawdaunt ex",
	},

	hp: 110,

	type: [
		Type.WATER,
	],

	dexId: 342,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/99/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/99/high",
		},
	},

	evolveFrom: {
		en: "Corphish",
	},

	tags: [
		Tag.EX,
	],

	illustrator: "Ryo Ueda",

	abilities: [{
		id: 802,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Splash Back",
		},
		text: {
			en: "Once during your turn (before your attack), if your opponent has 4 or more Benched Pokémon, you may choose 1 of them and return that Pokémon and all cards attached to it to his or her hand. This power can't be used if Crawdaunt ex is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Power Blow",
		},
		text: {
			en: "Does 20 damage times the amount of Energy attached to Crawdaunt ex.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card
