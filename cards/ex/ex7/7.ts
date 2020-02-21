import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-7",
	localId: 7,

	// Card informations
	name: {
		en: "Dark Marowak",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
		Type.DARKNESS,
	],

	dexId: 105,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/7/high",
		},
	},

	evolveFrom: {
		en: "Cubone",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Brick Smash",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Hard Bone",
		},
		text: {
			en: "Discard a Basic Pokémon or Evolution card from your hand or this attack does nothing.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
