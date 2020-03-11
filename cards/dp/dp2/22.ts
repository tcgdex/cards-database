import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-22",
	localId: 22,

	// Card informations
	name: {
		en: "Chimecho",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 358,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/22/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/22/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Daisuke Ito",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Call In",
		},
		text: {
			en: "Draw a card. If Chingling is anywhere under Chimecho, draw 2 more cards.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Strange Bell",
		},
		text: {
			en: "If the Defending Pokémon is a Basic Pokémon, that Pokémon is now Confused.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
