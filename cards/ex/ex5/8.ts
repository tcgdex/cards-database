import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-8",
	localId: 8,

	// Card informations
	name: {
		en: "Jirachi",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
		Type.METAL,
	],

	dexId: 385,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/8/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Make a Wish",
		},
		text: {
			en: "Search your deck for a card that evolves from 1 of your Pokémon and put it on that Pokémon. (This counts as evolving that Pokémon.) If you do, put 1 damage counter on Jirachi. Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.METAL
		],
		name: {
			en: "Mind Bend",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Hidden Legends",
		code: "ex5"
	}
}

export default card
