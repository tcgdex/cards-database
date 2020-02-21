import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dpp-DP24",
	localId: "DP24",

	// Card informations
	name: {
		en: "Darkrai",
	},

	hp: 80,

	type: [
		Type.DARKNESS,
	],

	dexId: 491,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP24/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Spacial Rend",
		},
		text: {
			en: "Search your deck for a Stadium card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. If there is any Stadium card in play, discard it.",
		},
		damage: 80
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.METAL
		],
		name: {
			en: "Roar of Time",
		},
		text: {
			en: "Search your discard pile for 3 Pokémon, show them to your opponent, and put them on top of your deck. Shuffle your deck afterward. (If you don't have 3 Pokémon in your discard pile, this attack does nothing.)",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "DP Black Star Promos",
		code: "dpp"
	}
}

export default card
