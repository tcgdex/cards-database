import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/dp/dp2/22/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/22/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 94,
		name: "Daisuke Ito"
	},



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

