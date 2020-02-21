import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-12",
	localId: 12,

	// Card informations
	name: {
		en: "Team Magma's Torkoal",
	},

	hp: 80,

	type: [
		Type.FIRE,
		Type.DARKNESS,
	],

	dexId: 324,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/12/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 173,
		name: "K. Hoshiba"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Magma Burn",
		},
		text: {
			en: "Discard the top card from your opponent's deck, and flip a coin. If tails, discard a Fire Energy attached to Team Magma's Torkoal.",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Hot Air",
		},
		text: {
			en: "Discard a Fire Energy attached to Team Magma's Torkoal, and your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Team Magma vs Team Aqua",
		code: "ex4"
	}
}

export default card
