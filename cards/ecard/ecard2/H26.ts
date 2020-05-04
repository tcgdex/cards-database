import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-H26",
	localId: "H26",

	// Card informations
	name: {
		en: "Tentacruel",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 73,


	evolveFrom: {
		en: "Tentacool",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hajime Kusajima",

	abilities: [{
		id: 805,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Strange Tentacles",
		},
		text: {
			en: "Once during your turn (before your attack), as long as the number of Energy cards attached to the Defending Pokémon is less than the number of Energy cards attached to your Active Pokémon, you may choose an Energy card, if any, in your opponent's discard pile and attach it to the Defending Pokémon. This power can't be used if Tentacruel is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Poison Sting",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
