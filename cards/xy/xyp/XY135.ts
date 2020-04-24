import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY135",
	localId: "XY135",

	// Card informations
	name: {
		en: "Beheeyem BREAK",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 606,


	evolveFrom: {
		en: "Beheeyem",
	},

	tags: [
		Tag.BREAK,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Cosmic Circle",
		},
		text: {
			en: "Move as many Psychic Energy attached to your Pokémon to your other Pokémon in any way you like.",
		},
		damage: 100
	}],







	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
