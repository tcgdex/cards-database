import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-9",
	localId: 9,

	// Card informations
	name: {
		en: "Elekid",
	},

	hp: 30,

	type: [
		Type.LIGHTNING,
	],

	dexId: 239,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/9/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 74,
		name: "Hikaru Koike"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Energy Kick",
		},
		text: {
			en: "Flip a coin. If heads, choose an Energy card attached to the Defending Pokémon. Your opponent moves that card to 1 of his or her other Pokémon. (If your opponent has no Benched Pokémon, this attack does nothing.)",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
