import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-H8",
	localId: "H8",

	// Card informations
	name: {
		en: "Entei",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 244,


	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Atsuko Nishida",

	abilities: [{
		id: 231,
		type: AbilityType.POKEBODY,
		name: {
			en: "Pure Body",
		},
		text: {
			en: "To attach a Fire Energy card from your hand to Entei, you must discard an Energy card attached to Entei. (Attach the Fire Energy, and then discard an Energy from Entei.)",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Burning Fang",
		},
		text: {
			en: "You may flip a coin. If heads, discard a Energy card attached to Entei and the Defending Pokémon is now Burned.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
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
