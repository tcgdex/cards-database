import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo1-34",
	localId: 34,

	// Card informations
	name: {
		en: "Flaaffy",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 180,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo1/34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo1/34/high",
		},
	},

	evolveFrom: {
		en: "Mareep",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Discharge",
		},
		text: {
			en: "Discard all Energy cards attached to Flaaffy in order to use this attack. Flip a number of coins equal to the number of Energy cards you discarded. This attack does 30 damage times the number of heads.",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING
		],
		name: {
			en: "Electric Current",
		},
		text: {
			en: "Take 1 Energy card attached to Flaaffy and attach it to 1 of your Benched Pokémon. If you have no Benched Pokémon, discard that Energy card.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Neo Genesis",
		code: "neo1"
	}
}

export default card
