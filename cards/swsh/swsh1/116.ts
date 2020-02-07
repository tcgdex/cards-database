import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-116",
	localId: 116,

	// Card informations
	name: {
		en: "Stonjourner VMAX",
	},

	hp: 330,

	type: [
		Type.FIGHTING,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/116/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/116/high.png",
		},
	},

	evolveFrom: {
		en: "Stonjourner V",
	},

	tags: [
		Tag.VMAX,
	],





	attacks: [{
		name: {
			en: "VMAX rule",
		},
	},{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Stone Gift",
		},
		text: {
			en: "Attach a Fighting Energy card from your hand to 1 of your Pokémon. If you do, heal 120 damage from that Pokémon.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Max Rockfall",
		},
		damage: 200
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareVMAX,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

