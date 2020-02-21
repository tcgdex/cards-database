import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex6-1",
	localId: 1,

	// Card informations
	name: {
		en: "Beedrill",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 15,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex6/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex6/1/high",
		},
	},

	evolveFrom: {
		en: "Kakuna",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Poison Sting",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Link Needle",
		},
		text: {
			en: "This attack does 50 damage plus 30 more damage for each Beedrill (excluding this one) you have in play.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "FireRed & LeafGreen",
		code: "ex6"
	}
}

export default card
