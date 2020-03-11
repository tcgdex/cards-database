import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-40",
	localId: 40,

	// Card informations
	name: {
		en: "Dark Pupitar",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
		Type.DARKNESS,
	],

	dexId: 247,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/40/high",
		},
	},

	evolveFrom: {
		en: "Larvitar",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Tomoaki Imakuni",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Explosive Evolution",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance.) Then, search your deck for a card that evolves from Dark Pupitar and put it on Dark Pupitar. (This counts as evolving Dark Pupitar.) Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Double Tackle",
		},
		text: {
			en: "Does 20 damage to each Defending Pokémon.",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
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
