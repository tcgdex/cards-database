import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-47",
	localId: 47,

	// Card informations
	name: {
		en: "Rocket's Wobbuffet",
	},

	hp: 70,

	type: [
		Type.DARKNESS,
	],

	dexId: 202,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/47/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/47/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Dark Aid",
		},
		text: {
			en: "Search your discard pile for Pokémon Tool cards and Rocket's Secret Machine cards. You may either show 1 Pokémon Tool card or Rocket's Secret Machine card to your opponent and put it into your hand, or show a combination of 3 Pokémon Tool cards or Rocket's Secret Machine cards to your opponent and shuffle them into your deck.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Amnesia",
		},
		text: {
			en: "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
