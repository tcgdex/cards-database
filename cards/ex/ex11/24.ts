import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-24",
	localId: 24,

	// Card informations
	name: {
		en: "Mightyena δ",
	},

	hp: 70,

	type: [
		Type.DARKNESS,
		Type.METAL,
	],

	dexId: 262,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/24/high",
		},
	},

	evolveFrom: {
		en: "Poochyena",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hajime Kusajima",



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Delta Fang",
		},
		text: {
			en: "If the Defending Pokémon is Pokémon-ex, that Pokémon can't attack during your opponent's next turn.",
		},
		damage: 20
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Gang Up",
		},
		text: {
			en: "Does 10 damage times the number of Darkness Pokémon and Metal Pokémon you have in play.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
