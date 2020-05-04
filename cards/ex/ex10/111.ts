import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex10-111",
	localId: 111,

	// Card informations
	name: {
		en: "Tyranitar ex",
	},

	hp: 160,

	type: [
		Type.DARKNESS,
	],

	dexId: 248,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex10/111/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex10/111/high",
		},
	},

	evolveFrom: {
		en: "Pupitar",
	},

	tags: [
		Tag.EX,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Shatter",
		},
		text: {
			en: "Discard any Stadium card in play.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Derail",
		},
		text: {
			en: "Discard a Special Energy card, if any, attached to the Defending Pokémon.",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Mix-Up",
		},
		text: {
			en: "Your opponent discards the top card of his or her deck.",
		},
		damage: 70
	},{
		cost: [
			Type.FIGHTING,
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Losing Control",
		},
		text: {
			en: "Discard the top 3 cards of your deck.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	},{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Unseen Forces",
		code: "ex10"
	}
}

export default card
