import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-17",
	localId: 17,

	// Card informations
	name: {
		en: "Dark Raticate",
	},

	hp: 70,

	type: [
		Type.DARKNESS,
	],

	dexId: 20,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/17/high",
		},
	},

	evolveFrom: {
		en: "Rattata",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Dark Seed",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn. Put 5 damage counters on the Defending Pokémon at the end of your opponent's next turn.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Spread Poison",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned. This attack does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
